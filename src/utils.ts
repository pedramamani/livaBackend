export function prettyJoin(values: string[], conjunction = 'and') {
    switch (values.length) {
        case 0: return ''
        case 1: return values[0]
        case 2: return `${values[0]} ${conjunction} ${values[1]}`
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

export function addMajorVersion(name: string, version: string) {
    const majorVersion = version.split('.')[0]
    if (majorVersion) {
        return `${name} ${majorVersion}`
    }
    return name
}

export function formDataToObject(formData: FormData) {
    const object: {[_: string]: FormDataEntryValue} = {}
    for (const [key, value] of formData.entries()) {
        object[key] = value
    }
    return object
}

export function json(data: any) {
    return new Response(JSON.stringify(data), {headers: {'Content-Type': 'application/json'}})
}