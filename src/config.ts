import type { CharSet, Schema } from './schema.ts'
import { RepeatSchema, BoundedSchema, EnumSchema, ComplexSchema } from './schema.ts'
import { Key, Theme, AvatarColor, AvatarShape, FormFactor } from './base.ts'
import { load } from "https://deno.land/std@0.182.0/dotenv/mod.ts";

const env = await load();

export const keyExpiry = 65
export const hostname = '10.0.0.199'
export const port = 58136
export const secret = {
    pocketBaseEmail: env['pocketBaseEmail'],
    pocketBasePassword: env['pocketBasePassword'],
    ipinfoToken: env['ipinfoToken'],
} as const
export const addresses = {
    database: 'http://127.0.0.1:8090',
    ipinfo: 'https://ipinfo.io',
} as const

export const charSets: { [_: string]: CharSet } = {
    numeric: { regex: RegExp(/^[0-9]*$/), chars: '0123456789', description: 'numbers' },
    lowerAlphaNum: { regex: RegExp(/^[0-9a-z]*$/), chars: '0123456789abcdefghijklmnopqrstuvwxyz', description: 'lowercase letters and numbers' },
    upperAlphaNum: { regex: RegExp(/^[0-9A-Z]*$/), chars: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', description: 'uppercase letters and numbers' },
    alphaNum: { regex: RegExp(/^[0-9a-zA-Z]*$/), chars: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', description: 'letters and numbers' },
    ascii: { regex: RegExp(/^[0-9a-zA-Z~!@#$%^&*()_+`\-=[\]{}|\\;:"\',./<>?]*$/), chars: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+`-=[]{}|\\;:"\',./<>?', description: 'ASCII characters' },
} as const

export const schemas: { [_ in Key]?: Schema } = {
    [Key.otp]: new RepeatSchema(6, charSets.numeric),
    [Key.licenseKey]: new RepeatSchema(8, charSets.upperAlphaNum),
    [Key.address]: new RepeatSchema(32, charSets.alphaNum),
    [Key.key]: new RepeatSchema(8, charSets.alphaNum),
    [Key.username]: new BoundedSchema(5, 16, charSets.lowerAlphaNum),
    [Key.pin]: new BoundedSchema(6, 32, charSets.numeric),
    [Key.userAgent]: new BoundedSchema(0, 1024, charSets.ascii),
    [Key.theme]: new EnumSchema(Theme),
    [Key.avatarShape]: new EnumSchema(AvatarShape),
    [Key.avatarColor]: new EnumSchema(AvatarColor),
    [Key.firstName]: new ComplexSchema(12, RegExp(/^[A-Z][a-z]*$/), 'Example', 'titlecase string of letters'),
    [Key.email]: new ComplexSchema(42, RegExp(/^[0-9a-z_.\-+]+@(gmail|yahoo|outlook)\.com$/), 'example@gmail.com', 'valid Gmail, Yahoo, or Outlook email address'),
}

export function getFormFactor(deviceType: string) {
    switch (deviceType) {
        case 'desktop': return FormFactor.desktop
        case 'tablet': return FormFactor.tablet
        case 'smartphone': return FormFactor.mobile
        default: return FormFactor.other
    }
}
