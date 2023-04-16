// @ts-nocheck functions that lack type safety
import { Record, Expanded, Full } from "./base.ts"

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
