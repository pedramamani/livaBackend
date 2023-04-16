import { RepeatSchema, BoundedSchema, EnumSchema, ComplexSchema, Schema, CharSet } from './schema.ts'
import { FormFactor, Theme, AvatarShape, AvatarColor, Error, Data, Key } from './base.ts'
import { load } from "https://deno.land/std@0.182.0/dotenv/mod.ts"

const env = await load()

export const keyExpiry = 65
export const port = 58136
export const secrets = {
    pbEmail: env['pbEmail'],
    pbPassword: env['pbPassword'],
    ipinfoToken: env['ipinfoToken'],
    lanAddress: env['lanAddress'],
}
export const addresses = {
    database: 'http://127.0.0.1:8090',
    ipinfo: 'https://ipinfo.io',
}

export const charSets: {[_: string]: CharSet} = {
    numeric: { regex: RegExp(/^[0-9]*$/), chars: '0123456789', description: 'numbers' },
    lowerAlphaNum: { regex: RegExp(/^[0-9a-z]*$/), chars: '0123456789abcdefghijklmnopqrstuvwxyz', description: 'lowercase letters and numbers' },
    upperAlphaNum: { regex: RegExp(/^[0-9A-Z]*$/), chars: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', description: 'uppercase letters and numbers' },
    alphaNum: { regex: RegExp(/^[0-9a-zA-Z]*$/), chars: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', description: 'letters and numbers' },
    ascii: { regex: RegExp(/^[0-9a-zA-Z~!@#$%^&*()_+`\-=[\]{}|\\;:"\',./<>?]*$/), chars: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+`-=[]{}|\\;:"\',./<>?', description: 'ASCII characters' },
}

export const themes: Theme[] = ['light', 'dark']
export const avatarShapes: AvatarShape[] = ['sun', 'butterfly', 'clam', 'duck', 'peacock', 'lily', 'bow', 'star', 'clover']
export const avatarColors: AvatarColor[] = ['rose', 'tan', 'lime', 'aqua', 'lavender']

export const schemas = {
    otp: new RepeatSchema(6, charSets.numeric),
    key: new RepeatSchema(8, charSets.upperAlphaNum),
    address: new RepeatSchema(32, charSets.alphaNum),
    token: new RepeatSchema(8, charSets.alphaNum),
    username: new BoundedSchema(5, 16, charSets.lowerAlphaNum),
    pin: new BoundedSchema(6, 32, charSets.numeric),
    userAgent: new BoundedSchema(0, 1024, charSets.ascii),
    theme: new EnumSchema(themes),
    avatarShape: new EnumSchema(avatarShapes),
    avatarColor: new EnumSchema(avatarColors),
    firstName: new ComplexSchema(12, RegExp(/^[A-Z][a-z]*$/), 'Example', 'titlecase string of letters'),
}
export type SchemaKey = keyof typeof schemas

export function getFormFactor(deviceType: string): FormFactor {
    switch (deviceType) {
        case 'desktop': return 'desktop'
        case 'tablet': return 'tablet'
        case 'smartphone': return 'mobile'
        default: return 'other'
    }
}

export function jsonResponse(data: Data) {
    return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
}

export function errorResponse(error: Error, keyErrors: { [K in Key]?: Data[K] extends string ? string : never } = {}) {
    return jsonResponse({ error: error, ...keyErrors })
}
