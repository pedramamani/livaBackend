import { RepeatSchema, BoundedSchema, EnumSchema, ComplexSchema } from './schema.js'
import { load } from "https://deno.land/std@0.182.0/dotenv/mod.ts"

const env = await load()

export const tokenExpiry = 65
export const secrets = {
    pbEmail: env['pbEmail'],
    pbPassword: env['pbPassword'],
    lanAddress: env['lanAddress'],
    lanPort: env['lanPort'],
    dbAddress: env['dbAddress'],
}

export const themes = ['light', 'dark']
export const avatarShapes = ['sun', 'butterfly', 'clam', 'duck', 'peacock', 'lily', 'bow', 'star', 'clover']
export const avatarColors = ['rose', 'tan', 'lime', 'aqua', 'lavender']

export const charSets = {
    numeric: { regex: RegExp(/^[0-9]*$/), chars: '0123456789', description: 'numbers' },
    lowerAlphaNum: { regex: RegExp(/^[0-9a-z]*$/), chars: '0123456789abcdefghijklmnopqrstuvwxyz', description: 'lowercase letters and numbers' },
    upperAlphaNum: { regex: RegExp(/^[0-9A-Z]*$/), chars: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', description: 'uppercase letters and numbers' },
    alphaNum: { regex: RegExp(/^[0-9a-zA-Z]*$/), chars: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', description: 'letters and numbers' },
    ascii: { regex: RegExp(/^[0-9a-zA-Z~!@#$%^&*()_+`\-=[\]{}|\\;:"\',./<>?]*$/), chars: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+`-=[]{}|\\;:"\',./<>?', description: 'ASCII characters' },
}

export const schemas = {
    otp: new RepeatSchema(6, charSets.numeric),
    key: new RepeatSchema(16, charSets.upperAlphaNum),
    address: new RepeatSchema(32, charSets.alphaNum),
    token: new RepeatSchema(8, charSets.alphaNum),
    username: new BoundedSchema(5, 16, charSets.lowerAlphaNum),
    pin: new BoundedSchema(6, 32, charSets.numeric),
    theme: new EnumSchema(themes),
    avatarShape: new EnumSchema(avatarShapes),
    avatarColor: new EnumSchema(avatarColors),
    firstName: new ComplexSchema(12, RegExp(/^[A-Z][a-z]*$/), 'Example', 'titlecase string of letters'),
}

export function areValid(data, ...keys) {
    for (const key of keys) {
        const schema = schemas[key]
        const value = data[key]
        if (value == undefined || !schema.isValid(value)) {
            return false
        }
    }
    return true
}

export function getErrors(data, ...keys) {
    const errorsByKey = {}
    for (const key of keys) {
        const schema = schemas[key]
        const value = data[key]
        if (value) {
            errorsByKey[key] = schema.getError(value)
        }
    }
    return errorsByKey
}
