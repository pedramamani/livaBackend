import PocketBase from 'npm:pocketbase'
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import { schemas, keyExpiry, secrets } from './config.ts'
import { Record, Collection, Key, Flat, Expanded, Full, Profile, Theme } from './base.ts'
import type { Account, Activity, License, Device, Auth } from './base.ts'
import { expandQuery, filterQuery, unixTime } from './utils.ts'
import { unflatten } from './cancer.ts'


class Database {
    client: PocketBase

    constructor () {
        this.client = new PocketBase(secrets.dbAddress)
        this.client.admins.authWithPassword(secrets.pbEmail, secrets.pbPassword)
    }

    async newDevice(account: Full<Account>) {
        const device = await this.create<Device>('device', {
            address: schemas.address.randomValue(),
            token: schemas.token.randomValue(),
            tokenExpiry: unixTime(keyExpiry),
            profiles: [account.profile.id],
            activeAccount: account.id
        })
        return device
    }

    async newProfile(username: string, firstName: string, theme: Theme) {
        const profile = await this.create<Profile>('profile', {
            username: username,
            firstName: firstName,
            avatarShape: schemas.avatarShape.randomValue(),
            avatarColor: schemas.avatarColor.randomValue(),
            theme: theme,
        })
        return profile
    }

    async newActivity(name = 'Activity', parent: Full<Activity> = null) {
        const activity = await this.create<Activity>('activity', {
            name: name,
            starred: false,
            children: [],
        })
        if (parent) {
            await this.update('activity', parent.id, {
                children: [...parent.children, activity.id]
            })
        }
        return activity
    }

    async newAuth(pin: string) {
        const auth = await this.create<Auth>('auth', {
            pin: await bcrypt.hash(pin),
            fails: 0,
            lastFail: 0,
        })
        return auth
    }

    async newAccount(license: Full<License>, auth: Full<Auth>, card: Full<Profile>) {
        const tree = await this.newActivity()
        const account = await this.create<Account>('account', {
            profile: card.id,
            auth: auth.id,
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

    async consumeLicenseKey(licenseKey: string) {
        const license = await this.find<License>('license', 'licenseKey', licenseKey)
        if (license && license.released && !license.consumed) {
            return this.update<License>('license', license.id, { consumed: true })
        }
    }

    async usernameIsAvailable(username: string) {
        const account = await this.find<Account>('account', 'username', username)
        return !account
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

    async update<R extends Record, E extends Expanded<R> = Expanded<R>>(name: Collection, id: string, record: Partial<R>, expand: Key[] = []) {
        const raw = await this.client.collection(name).update<E>(id, record, expandQuery(expand))
        return unflatten<R, E>(raw)
    }
}

export const database = new Database()
