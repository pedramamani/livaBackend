
import { ConnInfo } from "https://deno.land/std@0.125.0/http/server.ts"
import { ComplexSchema } from "./src/schema.ts"
import DeviceDetector from 'npm:device-detector-js'


const email = new ComplexSchema(42, RegExp(/^[0-9a-z_.\-+]+@(gmail|yahoo|outlook)\.com$/), 'example@gmail.com', 'valid Gmail, Yahoo, or Outlook email address'),

const formDataToObject = (formData: FormData) => {
    const object: {[k: string]: FormDataEntryValue} = {}
    for (const [key, value] of formData.entries()) {
        object[key] = value
    }
    return object
}

const getFormFactor = (deviceType: string) => {
    switch (deviceType) {
        case 'desktop': return 'desktop'
        case 'tablet': return 'tablet'
        case 'smartphone': return 'mobile'
        default: return 'other'
    }
}

type FormFactor = 'desktop' | 'tablet' | 'mobile' | 'other'

type Client = {
    userAgent: string
    os: string
    browser: string
    formFactor: FormFactor
    model: string
    brand: string
}

type Location = {
    ip: string
    city: string
    region: string
    countryCode: string
    timeZone: string
}

const handler = async (request: Request, connInfo: ConnInfo) => {
    const userAgent = request.headers.get('user-agent')
    let ip
    if (['tcp', 'udp'].includes(connInfo.remoteAddr.transport)) {
        ip = (connInfo.remoteAddr as Deno.NetAddr).hostname
    }

    if (!ip || !userAgent) {
        // invalidIpOrUserAgent
    }
}

const addMajorVersion = (name: string, version: string) => {
    const majorVersion = version.split('.')[0]
    if (majorVersion) {
        return `${name} ${majorVersion}`
    }
    return name
}

const newLocation = async (ip: string) => {
    let location = await this.find<Location>('location', 'ip', ip)
    if (location) {
        return location
    }

    const url = new URL('https://ipinfo.io')
    url.searchParams.set('token', 'IPINFO_TOKEN')
    const response = await fetch(url)
    const data = await response.json()

    location = await this.create<Location>('location', {
        ip: ip,
        city: data['city'],
        region: data['region'],
        countryCode: data['country'],
        timeZone: data['timezone'],
    })
    return location
}

const newClient = async (userAgent: string) => {
    let client = await this.find<Client>('client', 'userAgent', userAgent)
    if (client) {
        return client
    }

    const detector = new DeviceDetector()
    const info = detector.parse(userAgent)
    if (info.os && info.client && info.device) {
        client = await this.create<Client>('client', {
            userAgent: userAgent,
            os: addMajorVersion(info.os.name, info.os.version),
            browser: info.client.name,
            formFactor: getFormFactor(info.device.type),
            model: info.device.model,
            brand: info.device.brand,
        })
        return client
    }
}