import { randomInt } from 'node:crypto'
import { prettyJoin } from './utils.js'


export class RepeatSchema {
    constructor (length, charSet) {
        this.length = length
        this.charSet = charSet
    }

    lengthIsValid(value) {
        return value.length == this.length
    }

    charSetIsValid(value) {
        return this.charSet.regex.test(value)
    }

    isValid(value) {
        return this.lengthIsValid(value) && this.charSetIsValid(value)
    }

    getError(value) {
        if (!this.lengthIsValid(value)) {
            return `Must be ${this.length} characters`
        }
        if (!this.charSetIsValid(value)) {
            return `Can only contain ${this.charSet.description}`
        }
    }

    randomValue() {
        let value = ''
        for (let i = 0; i < this.length; i++) {
            const index = randomInt(this.charSet.chars.length)
            value += this.charSet.chars[index]
        }
        return value
    }
}

export class BoundedSchema {
    constructor (minLength, maxLength, charSet) {
        this.minLength = minLength
        this.maxLength = maxLength
        this.charSet = charSet
    }

    minLengthIsValid(value) {
        return value.length >= this.minLength
    }

    maxLengthIsValid(value) {
        return value.length <= this.maxLength
    }

    charSetIsValid(value) {
        return this.charSet.regex.test(value)
    }

    isValid(value) {
        return this.minLengthIsValid(value) && this.maxLengthIsValid(value) && this.charSetIsValid(value)
    }

    getError(value) {
        if (!this.minLengthIsValid(value)) {
            return `Must be ${this.minLength} characters at least`
        }
        if (!this.maxLengthIsValid(value)) {
            return `Can be ${this.maxLength} characters at most`
        }
        if (!this.charSetIsValid(value)) {
            return `Can only contain ${this.charSet.description}`
        }
    }

    randomValue() {
        let value = ''
        const length = randomInt(this.maxLength - this.minLength) + this.minLength
        for (let i = 0; i < length; i++) {
            const index = randomInt(this.charSet.chars.length)
            value += this.charSet.chars[index]
        }
        return value
    }
}

export class EnumSchema {
    constructor (values) {
        this.values = values
    }

    isValid(value) {
        return this.values.includes(value)
    }

    getError(value) {
        if (!this.isValid(value)) {
            return `Must be one of ${prettyJoin(this.values, 'or')}`
        }
    }

    randomValue() {
        const index = randomInt(this.values.length)
        return this.values[index]
    }
}

export class ComplexSchema {
    constructor (maxLength, regex, example, description) {
        this.maxLength = maxLength
        this.regex = regex
        this.example = example
        this.description = description
    }

    maxLengthIsValid(value) {
        return value.length <= this.maxLength
    }

    regexIsValid(value) {
        return this.regex.test(value)
    }

    isValid(value) {
        return this.maxLengthIsValid(value) && this.regexIsValid(value)
    }

    getError(value) {
        if (!this.maxLengthIsValid(value)) {
            return `Can be ${this.maxLength} characters at most`
        }
        if (!this.regexIsValid(value)) {
            return `Must be a ${this.description}`
        }
    }

    randomValue() {
        return this.example
    }
}
