// @ts-nocheck functions that lack type safety
import { Record, Expanded, Full, Flat, Base } from "./base.ts"

export function unflatten<R extends Record, E extends Expanded<R>>(raw: E) {
    const { expand, ...record } = raw
    for (const [key, value] of Object.entries(expand)) {
        if (Array.isArray(value)) {
            record[key] = value.map(unflatten)
        } else {
            record[key] = unflatten(value)
        }
    }
    return record as Full<R>
}

export function flatten<R extends Record, F extends Full<R>>(record: F) {
    for (const [key, value] of Object.entries(record)) {
        if (typeof value == 'object') {
            raw[key] = value.id
        } else if (Array.isArray(value)) {
            raw[key] = value.map(r => r.id)
        }
    }
    return raw as (Flat<R> & Base)
}