export type Record = License | Profile | Activity | Recording | Account | Device | Auth
export type Data = Partial<License & Profile & Activity & Recording & Account & Device & Auth & { error: Error }>
export type Key = keyof Data

export type Full<T extends Record> = {
    [K in keyof T]
    : T[K] extends Record ? Full<T[K]>
    : T[K] extends Array<Record> ? Full<T[K][number]>[]
    : T[K]
} & Base
export type Flat<R extends Record> = {
    [K in keyof R]
    : R[K] extends Record ? Id
    : R[K] extends (Record | undefined) ? Id | undefined
    : R[K] extends Array<Record> ? Id[]
    : R[K]
}
export type Expanded<T extends Record, K0 extends Key = never, K1 extends Key = never, K2 extends Key = never, K3 extends Key = never> = {
    expand: {
        [K in keyof T]
        : K extends K0 ? T[K] extends Record ? Expanded<T[K], K1, K2, K3>
        : T[K] extends Array<Record> ? Expanded<T[K][number], K1, K2, K3>[]
        : never : never
    }
} & Flat<T> & Base

export const themes = ['light', 'dark'] as const
export const avatarShapes = ['sun', 'butterfly', 'clam', 'duck', 'peacock', 'lily', 'bow', 'star', 'clover'] as const
export const avatarColors = ['rose', 'tan', 'lime', 'aqua', 'lavender'] as const
export type Id = string
export type Theme = typeof themes[number]
export type AvatarShape = typeof avatarShapes[number]
export type AvatarColor = typeof avatarColors[number]
export type Collection = 'license' | 'profile' | 'activity' | 'recording' | 'account' | 'device' | 'auth' | 'otp'
export type Endpoint = '/account/first'
export type Error = 'invalidIpOrUserAgent' | 'invalidEndpointOrMethod' | 'invalidRequest'

export type Base = {
    id: Id
    created: string
    updated: string
    collectionId: Id
    collectionName: Collection
}

export type License = {
    licenseKey: string
    consumed: boolean
    released: boolean
}

export type Profile = {
    username: string
    firstName: string
    avatarShape: AvatarShape
    avatarColor: AvatarColor
    theme: Theme
}

export type Otp = {
    otp: string
    fails: number
    expiry: number
}

export type Activity = {
    name: string
    children: Activity[]
    starred: boolean
}

export type Auth = {
    pin: string
    fails: number
    lastFail: number
}

export type Recording = {
    activity: Activity
    start: number
    end: number
}

export type Account = {
    profile: Profile
    auth: Auth
    license: License
    tree: Activity
    recordings: Recording[]
    activeRecording?: Recording
    otp?: Otp
}

export type Device = {
    address: string
    token: string
    tokenExpiry: number
    profiles: Profile[]
    activeAccount?: Account
}
