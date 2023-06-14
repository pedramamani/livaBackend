import { RepeatSchema, BoundedSchema, EnumSchema, ComplexSchema, CharSet } from './schema.ts'
import { themes, avatarShapes, avatarColors, Error, Data, Key } from './base.ts'
import { load } from "https://deno.land/std@0.182.0/dotenv/mod.ts"

const env = await load()

export const keyExpiry = 65
export const port = 58136
export const secrets = {
    pbEmail: env['pbEmail'],
    pbPassword: env['pbPassword'],
    lanAddress: env['lanAddress'],
    dbAddress: env['dbAddress'],
}

export const charSets: { [_: string]: CharSet } = {
    numeric: { regex: RegExp(/^[0-9]*$/), chars: '0123456789', description: 'numbers' },
    lowerAlphaNum: { regex: RegExp(/^[0-9a-z]*$/), chars: '0123456789abcdefghijklmnopqrstuvwxyz', description: 'lowercase letters and numbers' },
    upperAlphaNum: { regex: RegExp(/^[0-9A-Z]*$/), chars: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', description: 'uppercase letters and numbers' },
    alphaNum: { regex: RegExp(/^[0-9a-zA-Z]*$/), chars: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', description: 'letters and numbers' },
    ascii: { regex: RegExp(/^[0-9a-zA-Z~!@#$%^&*()_+`\-=[\]{}|\\;:"\',./<>?]*$/), chars: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+`-=[]{}|\\;:"\',./<>?', description: 'ASCII characters' },
}

export const schemas = {
    otp: new RepeatSchema(6, charSets.numeric),
    key: new RepeatSchema(8, charSets.upperAlphaNum),
    address: new RepeatSchema(32, charSets.alphaNum),
    token: new RepeatSchema(8, charSets.alphaNum),
    username: new BoundedSchema(5, 16, charSets.lowerAlphaNum),
    pin: new BoundedSchema(6, 32, charSets.numeric),
    userAgent: new BoundedSchema(0, 1024, charSets.ascii),
    theme: new EnumSchema([...themes]),
    avatarShape: new EnumSchema([...avatarShapes]),
    avatarColor: new EnumSchema([...avatarColors]),
    firstName: new ComplexSchema(12, RegExp(/^[A-Z][a-z]*$/), 'Example', 'titlecase string of letters'),
}
export type SchemaKey = keyof typeof schemas


export function jsonResponse(data: Data) {
    return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
}

export function errorResponse(error: Error, keyErrors: { [K in Key]?: string extends Data[K] ? string : never } = {}) {
    return jsonResponse({error: error, ...keyErrors })
}

export function areValid(data: Data, ...keys: Key[]) {
    for (const key of keys) {
        const schema = schemas[key as SchemaKey]
        const value = data[key]
        if (schema && (!value || !schema.isValid(value as string))) {
            return false
        }
    }
    return true
}


export function getErrors(data: Data, ...keys: Key[]) {
    const errors: { [_ in Key]?: string } = {}
    for (const key of keys) {
        const schema = schemas[key as SchemaKey]
        const value = data[key]
        if (schema && value) {
            errors[key] = schema.getError(value as string)
        }
    }
    return errors
}
