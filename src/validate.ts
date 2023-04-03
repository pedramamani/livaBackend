import { schemas } from './config.ts'
import type { Key, Data } from './base.ts'


export function areValid(data: Data, ...keys: Key[]) {
    for (const key of keys) {
        const schema = schemas[key]
        const value = data[key]
        if (schema && !(value && schema.isValid(value))) {
            return false
        }
    }
    return true
}


export function getErrors(data: Data, ...keys: Key[]) {
    const errors: Data = {}
    for (const key of keys) {
        const schema = schemas[key]
        const value = data[key]
        if (schema && value) {
            errors[key] = schema.getError(value)
        }
    }
    return errors
}