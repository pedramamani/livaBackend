import PocketBase from 'npm:pocketbase'
import DeviceDetector from 'npm:device-detector-js'
import { addresses, schemas, getFormFactor, keyExpiry, secrets } from './config.ts'
import { Record, Collection, Key, Flat, Expanded, Full, AccountCard, Theme } from './base.ts'
import type { Account, Activity, Client, License, Location, Device } from './base.ts'
import { addMajorVersion, expandQuery, filterQuery, unixTime } from './utils.ts'
import { unflatten } from './cancer.ts'


class Database {
    client: PocketBase

    constructor () {
        this.client = new PocketBase(addresses.database)
        this.client.admins.authWithPassword(secrets.pbEmail, secrets.pbPassword)
    }

    async newLocation(ip: string) {
        let location = await this.find<Location>('location', 'ip', ip)
        if (location) {
            return location
        }

        const url = new URL(addresses.ipinfo)
        url.searchParams.set('token', secrets.ipinfoToken)
        const response = await fetch(url)
        const data = await response.json()

        location = await this.create<Location>('location', {
            ip: ip,
            city: data['city'],
            region: data['region'],
            countryCode: data['country'],
            timeZone: data['timezone'],
        })
        return location
    }

    async newClient(userAgent: string) {
        let client = await this.find<Client>('client', 'userAgent', userAgent)
        if (client) {
            return client
        }

        const detector = new DeviceDetector()
        const info = detector.parse(userAgent)
        if (info.os && info.client && info.device) {
            client = await this.create<Client>('client', {
                userAgent: userAgent,
                os: addMajorVersion(info.os.name, info.os.version),
                browser: info.client.name,
                formFactor: getFormFactor(info.device.type),
                model: info.device.model,
                brand: info.device.brand,
            })
            return client
        }
    }

    async newDevice(location: Full<Location>, client: Full<Client>, account: Full<Account>) {
        const device = await this.create<Device>('device', {
            address: schemas.address.randomValue(),
            token: schemas.token.randomValue(),
            tokenExpiry: unixTime(keyExpiry),
            location: location.id,
            client: client.id,
            cards: [account.card.id],
            activeAccount: account.id
        })

        type FlatDevice = Flat<Device>
        return device
    }

    async newAccountCard(username: string, firstName: string, theme: Theme) {
        const card = await this.create<AccountCard>('accountCard', {
            username: username,
            firstName: firstName,
            avatarShape: schemas.avatarShape.randomValue(),
            avatarColor: schemas.avatarColor.randomValue(),
            theme: theme,
        })
        return card
    }

    async newActivity(name = 'Activity') {
        const activity = await this.create<Activity>('activity', {
            name: name,
            starred: false,
            children: [],
        })
        return activity
    }

    async newAccount(pin: string, card: Full<AccountCard>, license: Full<License>) {
        const tree = await this.newActivity()
        const account = await this.create<Account>('account', {
            card: card.id,
            pin: pin,
            license: license.id,
            tree: tree.id,
            recordings: [],
        })
        return account
    }

    // async startDevice(address: string) {
    //     const device = await this.find<Device>('device', 'address', address)
    //     if (device) {
    //         return this.update('device', device.id, {
    //             token: schemas.token.randomValue(),
    //             tokenExpiry: unixTime(keyExpiry),
    //         }, ['cards', 'activeAccount'])
    //     }
    // }

    // async sustainDevice(address: string) {
    //     const device = await this.find<Device>('device', 'address', address)
    //     if (device) {
    //         return this.update('device', device.id, {
    //             tokenExpiry: unixTime(keyExpiry),
    //         })
    //     }
    // }

    // async deviceIsValid(address: string, token: string) {
    //     const device = await this.find<Device>('device', 'address', address)
    //     return device && device.token == token && device.tokenExpiry > unixTime()
    // }

    async licenseKeyIsValid(key: string) {
        const license = await this.find<License>('license', 'key', key)
        return license && license.isValid
    }

    async invalidateLicenseKey(key: string) {
        const license = await this.find<License>('license', 'key', key)
        if (license) {
            this.update('license', license.id, { isValid: false })
        }
    }

    async usernameTaken(username: string) {
        const account = await this.find<Account>('account', 'username', username)
        return Boolean(account)
    }

    async find<R extends Record, E extends Expanded<R> = Expanded<R>>(name: Collection, key: Key, value: string, expand: Key[] = []) {
        try {
            const raw = await this.client.collection(name).getFirstListItem<E>(filterQuery(key, value), expandQuery(expand))
            return unflatten<R, E>(raw)
        } catch (_) {
            return
        }
    }

    async create<R extends Record, E extends Expanded<R> = Expanded<R>>(name: Collection, record: Flat<R>, expand: Key[] = []) {
        const raw = await this.client.collection(name).create<E>(record, expandQuery(expand))
        return unflatten<R, E>(raw)
    }

    async update<R extends Record, E extends Expanded<R> = Expanded<R>>(name: Collection, id: string, record: Partial<Flat<R>>, expand: Key[] = []) {
        const raw = await this.client.collection(name).update<E>(id, record, expandQuery(expand))
        return unflatten<R, E>(raw)
    }
}

export const database = new Database()
