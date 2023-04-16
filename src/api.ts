import { serve } from 'https://deno.land/std@0.178.0/http/server.ts'
import { database } from './database.ts'
import { secrets, port, jsonResponse, errorResponse } from './config.ts'
import { areValid } from './validate.ts'

export enum Endpoint {
    firstAccount = '/account/first',
    newAccount = '/account/new',
    temp = '/temp',
}

await serve(handler, { hostname: secrets.lanAddress, port: port })

function handler(request: Request) {
    if (request.method != 'POST') {
        return new Response('invalidEndpoint', { status: 405 })
    }
    const url = new URL(request.url)
    switch (url.pathname) {
        case Endpoint.firstAccount:
            return firstAccount(request)
    }
    return errorResponse('invalidEndpoint')
}


async function firstAccount(request: Request) {
    const ip = request.headers.get('host')
    const userAgent = request.headers.get('user-agent')
    if (!ip || !userAgent) {
        return errorResponse('invalidRequest')
    }

    const location = await database.newLocation(ip)
    const client = await database.newClient(userAgent)
    if (!client) {
        return errorResponse('invalidRequest')
    }

    const data = await request.json()
    if (!areValid(data, 'username', 'firstName', 'theme', 'pin')) {
        return errorResponse('invalidRequest')
    }

    const accountCard = await database.newAccountCard(data.username, data.firstName, data.theme)
    const account = await database.newAccount(data.pin, accountCard)

    const device = await database.newDevice(location, client, account)
    return jsonResponse(device)
}
