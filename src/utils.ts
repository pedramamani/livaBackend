export function prettyJoin(values: string[], conjunction = 'and') {
    switch (values.length) {
        case 0:
            return ''
        case 1:
            return values[0]
        case 2:
            return `${values[0]} ${conjunction} ${values[1]}`
        default: {
            const allButLast = values.slice(0, -1).join(', ')
            return `${allButLast}, ${conjunction} ${values.at(-1)}`
        }
    }
}

export function emptyIfNa(value: string) {
    return value === 'N/A' ? '' : value
}

export function unixTime(offset = 0) {
    return Math.floor(Date.now() / 1000) + offset
}



export function filterQuery(key: string, value: string) {
    return `${key}='${value}'`
}

export function expandQuery(keys: string[]) {
    const value = keys.map((_, index) => keys.slice(0, index + 1).join('.')).join(',')
    return {expand: value}
}