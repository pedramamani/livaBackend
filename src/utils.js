export function prettyJoin(words, conjunction = 'and') {
    switch (words.length) {
        case 0:
            return ''
        case 1:
            return words[0]
        case 2:
            return `${words[0]} ${conjunction} ${words[1]}`
        default: {
            const allButLast = words.slice(0, -1).join(', ')
            return `${allButLast}, ${conjunction} ${words.at(-1)}`
        }
    }
}

export function unixTime(offset = 0) {
    return Math.floor(Date.now() / 1000) + offset
}

export function filterQuery(key, value) {
    return `${key}='${value}'`
}

export function expandQuery(keys) {
    return {expand: keys.join(',')}
}

export function inflate(deflatedRecord) {
    if (!deflatedRecord.expand) {
        return deflatedRecord
    }
    const { expand: expansion, ...record } = deflatedRecord
    for (const [key, value] of Object.entries(expansion)) {
        if (Array.isArray(value)) {
            record[key] = value.map(inflate)
        } else {
            record[key] = inflate(value)
        }
    }
    return record
}

export function deflate(inflatedRecord) {
    for (const [key, value] of Object.entries(inflatedRecord)) {
        if (typeof value == 'object') {
            record[key] = value.id
        } else if (Array.isArray(value)) {
            record[key] = value.map(r => r.id)
        }
    }
    return record
}

export function jsonResponse(data) {
    return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
}

export function errorResponse(error, errorsByKey = {}) {
    return jsonResponse({error: error, ...errorsByKey })
}