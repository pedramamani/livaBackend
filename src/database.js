import PocketBase from 'npm:pocketbase'
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts"
import { schemas, tokenExpiry, secrets } from './config.js'
import { expandQuery, filterQuery, unixTime, inflate } from './utils.js'


class Database {
    constructor() {
        this.client = new PocketBase(secrets.dbAddress)
        this.client.admins.authWithPassword(secrets.pbEmail, secrets.pbPassword)
    }

    async newAccount(data) {
        const profile = await this.create('profile', {
            username: data.username,
            firstName: data.firstName,
            avatarShape: schemas.avatarShape.randomValue(),
            avatarColor: schemas.avatarColor.randomValue(),
            theme: data.theme,
        })
        const auth = await this.create('auth', {
            pin: await bcrypt.hash(data.pin),
            fails: 0,
            lastFail: 0,
        })
        const tree = await this.newActivity('Activity')
        const license = await this.find('license', 'key', data.key)
        await this.update('license', license.id, { consumed: true })
        const account = await this.create('account', {
            profile: profile.id,
            auth: auth.id,
            tree: tree.id,
            license: license.id,
            recordings: [],
        })
        return account
    }

    async newActivity(name, parentId = undefined) {
        const activity = await this.create('activity', {
            name: name,
            starred: false,
            children: [],
        })
        if (parentId != undefined) {
            const parent = await this.find('activity', 'id', parentId)
            await this.update('activity', parentId, {
                children: [...parent.children, activity.id]
            })
        }
        return activity
    }

    // async startDevice(address) {
    //     const device = await this.find('device', 'address', address)
    //     if (device) {
    //         return this.update('device', device.id, {
    //             token: schemas.token.randomValue(),
    //             tokenExpiry: unixTime(keyExpiry),
    //         })
    //     }
    // }

    // async sustainDevice(address) {
    //     const device = await this.find<Device>('device', 'address', address)
    //     if (device) {
    //         return this.update('device', device.id, {
    //             tokenExpiry: unixTime(keyExpiry),
    //         })
    //     }
    // }

    // async deviceIsValid(address, token) {
    //     const device = await this.find<Device>('device', 'address', address)
    //     return device && device.token == token && device.tokenExpiry > unixTime()
    // }

    async find(collection, key, value, expandKeys = []) {
        try {
            const deflatedRecord = await this.client.collection(collection).getFirstListItem(filterQuery(key, value), expandQuery(expandKeys))
            return inflate(deflatedRecord)
        } catch (_) {
            return
        }
    }

    async create(collection, record, expandKeys = []) {
        const deflatedRecord = await this.client.collection(collection).create(record, expandQuery(expandKeys))
        return inflate(deflatedRecord)
    }

    async update(collection, id, record, expandKeys = []) {
        const deflatedRecord = await this.client.collection(collection).update(id, record, expandQuery(expandKeys))
        return inflate(deflatedRecord)
    }
}

export const database = new Database()
