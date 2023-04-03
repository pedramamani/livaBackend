export type Value = string | number | boolean | null | Value[]
export type Data = { [_ in Key]?: Value }

export enum Endpoint {
    init = '/init',
    start = '/start',
    sustain = '/sustain',
    signUp = '/signUp',
    signIn = '/signIn',
    signOut = '/signOut',
    logIn = '/logIn',
}

export enum Theme {
    light = 'light',
    dark = 'dark',
}

export enum AvatarShape {
    sun = 'sun',
    butterfly = 'butterfly',
    clam = 'clam',
    duck = 'duck',
    peacock = 'peacock',
    lily = 'lily',
    bow = 'bow',
    star = 'star',
    clover = 'clover',
}

export enum AvatarColor {
    rose = 'rose',
    tan = 'tan',
    lime = 'lime',
    aqua = 'aqua',
    lavender = 'lavender',
}

export enum FormFactor {
    desktop = 'desktop',
    tablet = 'tablet',
    mobile = 'mobile',
    other = 'other',
}

export enum Error {
    invalidRequest = 'invalidRequest',
    invalidEndpoint = 'invalidEndpoint',
}

export enum Collection {
    account = 'account',
    accountData = 'accountData',
    activity = 'activity',
    client = 'client',
    device = 'device',
    license = 'license',
    location = 'location',
    record = 'record',
}

export enum Key {
    otp = 'otp',
    licenseKey = 'licenseKey',
    firstName = 'firstName',
    username = 'username',
    pin = 'pin',
    email = 'email',
    userAgent = 'userAgent',
    theme = 'theme',
    avatarShape = 'avatarShape',
    avatarColor = 'avatarColor',
    ip = 'ip',
    city = 'city',
    region = 'region',
    countryCode = 'countryCode',
    timeZone = 'timeZone',
    latitude = 'latitude',
    longitude = 'longitude',
    os = 'os',
    browser = 'browser',
    model = 'model',
    address = 'address',
    client = 'client',
    location = 'location',
    error = 'error',
    key = 'key',
    keyExpiry = 'keyExpiry',
    isValid = 'isValid',
    activeDevice = 'activeDevice',
    rootActivity = 'rootActivity',
    accounts = 'accounts',
    activeAccount = 'activeAccount',
    activity = 'activity',
    start = 'start',
    end = 'end',
    name = 'name',
    parent = 'parent',
    children = 'children',
    starred = 'starred',
    records = 'records',
    activeRecord = 'activeRecord',
    activities = 'activities',
    formFactor = 'formFactor',
    brand = 'brand',
}

export type Base<T = never> = {
    id: string
    created: string
    updated: string
    collectionId: string
    collectionName: Collection
    expand?: T
}

export type Account<T = unknown> = {
    [Key.username]: string
    [Key.pin]: string
    [Key.firstName]: string
    [Key.avatarShape]: string
    [Key.avatarColor]: string
    [Key.theme]: string
    [Key.activeDevice]?: string
    [Key.activities]?: string[]
    [Key.rootActivity]: string
    [Key.records]?: string[]
    [Key.activeRecord]?: string
} & Base<T>

export type Activity<T = unknown> = {
    [Key.name]: string
    [Key.parent]?: string
    [Key.children]?: string[]
    [Key.starred]?: boolean
} & Base<T>

export type Client = {
    [Key.userAgent]: string
    [Key.os]: string
    [Key.browser]: string
    [Key.model]: string
} & Base

export type Device<T = unknown> = {
    [Key.address]: string
    [Key.key]: string
    [Key.keyExpiry]: number
    [Key.theme]: string
    [Key.location]: string
    [Key.client]: string
    [Key.activeAccount]?: string
    [Key.accounts]?: string[]
} & Base<T>

export type License = {
    [Key.licenseKey]: string
    [Key.isValid]?: boolean
} & Base

export type Location = {
    [Key.ip]: string
    [Key.city]: string
    [Key.region]: string
    [Key.countryCode]: string
    [Key.timeZone]: string
} & Base

export type Record<T = unknown> = {
    [Key.activity]: string
    [Key.start]: number
    [Key.end]: number
} & Base<T>
