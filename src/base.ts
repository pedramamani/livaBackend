export type Record = License | Client | Location | AccountCard | Activity | Recording | Account | Device
export type Data = Partial<License & Client & Location & AccountCard & Activity & Recording & Account & Device & { error: Error }>
export type Key = keyof Data

export type Full<T extends Record> = {
    [K in keyof T]
    : T[K] extends Record ? Full<T[K]>
    : T[K] extends Array<Record> ? Full<T[K][number]>[]
    : T[K]
} & Base
export type Flat<R extends Record> = {
    [K in keyof R]
    : R[K] extends Record ? string
    : R[K] extends (Record | undefined) ? string | undefined
    : R[K] extends Array<Record> ? string[]
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

export type Collection = 'license' | 'client' | 'location' | 'accountCard' | 'activity' | 'recording' | 'account' | 'device'
export type FormFactor = 'desktop' | 'tablet' | 'mobile' | 'other'
export type Error = 'invalidRequest' | 'invalidEndpoint'
export type Theme = 'light' | 'dark'
export type AvatarShape = 'sun' | 'butterfly' | 'clam' | 'duck' | 'peacock' | 'lily' | 'bow' | 'star' | 'clover'
export type AvatarColor = 'rose' | 'tan' | 'lime' | 'aqua' | 'lavender'

export type Base = {
    id: string
    created: string
    updated: string
    collectionId: string
    collectionName: Collection
}

export type License = {
    key: string
    isValid: boolean
}

export type Client = {
    userAgent: string
    os: string
    browser: string
    formFactor: FormFactor
    model: string
    brand: string
}

export type Location = {
    ip: string
    city: string
    region: string
    countryCode: string
    timeZone: string
}

export type AccountCard = {
    username: string
    firstName: string
    avatarShape: AvatarShape
    avatarColor: AvatarColor
    theme: Theme
}

export type Activity = {
    name: string
    children: Activity[]
    starred: boolean
}

export type Recording = {
    activity: Activity
    start: number
    end: number
}

export type Account = {
    card: AccountCard
    pin: string
    otp?: string
    otpExpiry?: number
    license: License
    tree: Activity
    recordings: Recording[]
    activeRecording?: Recording
}

export type Device = {
    address: string
    token: string
    tokenExpiry: number
    location: Location
    client: Client
    cards: AccountCard[]
    activeAccount?: Account
}
