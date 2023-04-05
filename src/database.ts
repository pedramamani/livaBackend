import PocketBase from 'npm:pocketbase'
import DeviceDetector from 'npm:device-detector-js'
import { addresses, schemas, getFormFactor, keyExpiry, env } from './config.ts'
import { Collection, Key } from './base.ts'
import type { Account, Activity, Client, License, Location, Device, Data } from './base.ts'
import { addMajorVersion, unixTime } from './utils.ts'


class Database {
    client: PocketBase

    constructor () {
        this.client = new PocketBase(addresses.database)
        this.client.admins.authWithPassword(env.pbEmail, env.pbPassword)
    }

    async newLocation(ip: string) {
        let location = await this.find<Location>(Collection.location, Key.ip, ip)
        if (location) {
            return location
        }

        const url = new URL(addresses.ipinfo)
        url.searchParams.set('token', env.ipinfoToken)
        const response = await fetch(url)
        const data = await response.json()

        location = await this.create<Location>(Collection.location, {
            [Key.ip]: ip,
            [Key.city]: data['city'],
            [Key.region]: data['region'],
            [Key.countryCode]: data['country'],
            [Key.timeZone]: data['timezone']
        })
        return location
    }

    async newClient(userAgent: string) {
        let client = await this.find<Client>(Collection.client, Key.userAgent, userAgent)
        console.log(userAgent)
        if (client) {
            return client
        }

        const detector = new DeviceDetector()
        const info = detector.parse(userAgent)
        if (info.os && info.client && info.device) {
            client = await this.create<Client>(Collection.client, {
                [Key.userAgent]: userAgent,
                [Key.os]: addMajorVersion(info.os.name, info.os.version),
                [Key.browser]: info.client.name,
                [Key.formFactor]: getFormFactor(info.device.type),
                [Key.model]: info.device.model,
                [Key.brand]: info.device.brand,
            })
            return client
        }
    }

    async newDevice(location: Location, client: Client, theme: string) {
        const device = await this.create<Device>(Collection.device, {
            [Key.address]: schemas[Key.address]!.randomValue(),
            [Key.key]: schemas[Key.key]!.randomValue(),
            [Key.keyExpiry]: unixTime(keyExpiry),
            [Key.location]: location.id,
            [Key.client]: client.id,
            [Key.theme]: theme,
        })
        return device
    }

    async startDevice(address: string) {
        const device = await this.find<Device>(Collection.device, Key.address, address)
        if (device) {
            return this.update(Collection.device, device.id, {
                [Key.key]: schemas[Key.key]!.randomValue(),
                [Key.keyExpiry]: unixTime(keyExpiry),
            }, `${Key.activeAccount},${Key.accounts}`)
        }
    }

    async sustainDevice(address: string) {
        const device = await this.find<Device>(Collection.device, Key.address, address)
        if (device) {
            return this.update(Collection.device, device.id, {
                [Key.keyExpiry]: unixTime(keyExpiry),
            })
        }
    }

    async deviceIsValid(address: string, key: string) {
        const device = await this.find<Device>(Collection.device, Key.address, address)
        return device && device[Key.key] == key && device[Key.keyExpiry] > unixTime()
    }

    async licenseKeyIsValid(licenseKey: string) {
        const license = await this.find<License>(Collection.license, Key.licenseKey, licenseKey)
        return license && license[Key.isValid]
    }

    async invalidateLicenseKey(licenseKey: string) {
        const license = await this.find<License>(Collection.license, Key.licenseKey, licenseKey)
        if (license) {
            this.update(Collection.license, license.id, { [Key.isValid]: false })
        }
    }

    async usernameTaken(username: string) {
        const account = await this.find<Account>(Collection.account, Key.username, username)
        return Boolean(account)
    }

    async newAccount(device: Device, username: string, firstName: string, pin: string) {
        const rootActivity = await this.create<Activity>(Collection.activity, {
            [Key.name]: 'Activity',
        })
        const account = await this.create<Account>(Collection.account, {
            [Key.username]: username,
            [Key.pin]: pin,
            [Key.firstName]: firstName,
            [Key.activeDevice]: device.id,
            [Key.rootActivity]: rootActivity.id,
            [Key.activities]: [rootActivity.id],
            [Key.avatarColor]: schemas[Key.avatarColor]!.randomValue(),
            [Key.avatarShape]: schemas[Key.avatarShape]!.randomValue(),
            [Key.theme]: device[Key.theme],
        }, `${Key.activeDevice},${Key.rootActivity},${Key.activities}`)

        const accountIds = device[Key.accounts] ?? []
        accountIds.push(account.id)
        this.update(Collection.device, device.id, {
            [Key.activeAccount]: account.id,
            [Key.accounts]: accountIds,
        })
        return account
    }

    async find<T>(collection: Collection, key: Key, value: string, expansions = '') {
        try {
            const record = await this.client.collection(collection).getFirstListItem<T>(`${key}='${value}'`, { expand: expansions })
            return record
        } catch (_) {
            return
        }
    }

    async create<T>(collection: Collection, data: Data, expansions = '') {
        const record = await this.client.collection(collection).create<T>(data, { expand: expansions })
        return record
    }

    async update<T>(collection: Collection, id: string, data: Data, expansions = '') {
        const record = await this.client.collection(collection).update<T>(id, data, { expand: expansions })
        return record
    }
}

export const database = new Database()
