import { randomInt } from 'node:crypto'
import { prettyJoin } from './utils.ts'

export type CharSet = { regex: RegExp; chars: string; description: string }

export interface Schema {
    isValid(value: string): boolean
    getError(value: string): string | undefined
    randomValue(): string
}

export class RepeatSchema implements Schema {
    length: number
    charSet: CharSet

    constructor (length: number, charSet: CharSet) {
        this.length = length
        this.charSet = charSet
    }

    lengthIsValid(value: string) {
        return value.length == this.length
    }

    charSetIsValid(value: string) {
        return this.charSet.regex.test(value)
    }

    isValid(value: string) {
        return this.lengthIsValid(value) && this.charSetIsValid(value)
    }

    getError(value: string) {
        if (!this.lengthIsValid(value)) {
            return `Must be ${this.length} characters`
        }
        if (!this.charSetIsValid(value)) {
            return `Can only contain ${this.charSet}`
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

export class BoundedSchema implements Schema {
    minLength: number
    maxLength: number
    charSet: CharSet

    constructor (minLength: number, maxLength: number, charSet: CharSet) {
        this.minLength = minLength
        this.maxLength = maxLength
        this.charSet = charSet
    }

    minLengthIsValid(value: string) {
        return value.length >= this.minLength
    }

    maxLengthIsValid(value: string) {
        return value.length <= this.maxLength
    }

    charSetIsValid(value: string) {
        return this.charSet.regex.test(value)
    }

    isValid(value: string) {
        return this.minLengthIsValid(value) && this.maxLengthIsValid(value) && this.charSetIsValid(value)
    }

    getError(value: string) {
        if (!this.minLengthIsValid(value)) {
            return `Must be ${this.minLength} characters at least`
        }
        if (!this.maxLengthIsValid(value)) {
            return `Can be ${this.maxLength} characters at most`
        }
        if (!this.charSetIsValid(value)) {
            return `Can only contain ${this.charSet}`
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

export class EnumSchema<T extends string> implements Schema {
    values: T[]

    constructor (values: T[]) {
        this.values = values
    }

    isValid(value: string) {
        return this.values.includes(value as T)
    }

    getError(value: string) {
        if (!this.isValid(value)) {
            return `Must be one of ${prettyJoin(this.values, 'or')}`
        }
    }

    randomValue() {
        const index = randomInt(this.values.length)
        return this.values[index]
    }
}

export class ComplexSchema implements Schema {
    maxLength: number
    regex: RegExp
    example: string
    description: string

    constructor (maxLength: number, regex: RegExp, example: string, description: string) {
        this.maxLength = maxLength
        this.regex = regex
        this.example = example
        this.description = description
    }

    maxLengthIsValid(value: string) {
        return value.length <= this.maxLength
    }

    regexIsValid(value: string) {
        return this.regex.test(value)
    }

    isValid(value: string) {
        return this.maxLengthIsValid(value) && this.regexIsValid(value)
    }

    getError(value: string) {
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
