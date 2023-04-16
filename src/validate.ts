import { SchemaKey, schemas } from './config.ts'
import type { Data, Key } from './base.ts'


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