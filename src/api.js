import { serve } from 'https://deno.land/std@0.178.0/http/server.ts'
import { database } from './database.js'
import { areValid, secrets } from './config.js'
import { errorResponse, jsonResponse } from './utils.js'

async function firstAccount(request) {
    const data = await request.json()
    if (!areValid(data, 'key', 'username', 'firstName', 'theme', 'pin')) {
        return errorResponse('malformedRequest')
    }
    const license = await database.find('license', 'key', data.key)
    if (license != undefined && license.consumed) {
        return errorResponse('badData', { key: 'This key is invalid or has already been used.' })
    }
    const profile = await database.find('profile', 'username', data.username)
    if (profile != undefined) {
        return errorResponse('badData', { username: 'This username is already taken.' })
    }
    const account = await database.newAccount(data)
    const device = await database.create('device', {
        address: schemas.address.randomValue(),
        token: schemas.token.randomValue(),
        tokenExpiry: unixTime(tokenExpiry),
        profiles: [account.profile],
        activeAccount: account.id,
    }, ['profiles', 'activeAccount', 'activeAccount.profile', 'activeAccount.license', 'activeAccount.tree'])
    return jsonResponse(device)
}

async function startDevice(request) {
    const data = await request.json()
    if (!areValid(data, 'address')) {
        return errorResponse('malformedRequest')
    }
    const device = await database.find('device', 'address', data.address)
    if (device == undefined) {
        return errorResponse('badData')
    }
    return jsonResponse(device)
}

const funcByEndpoint = {
    '/account/first': firstAccount,
    '/device/start': startDevice,
}

function handler(request) {
    if (request.method == 'POST') {
        const url = new URL(request.url)
        const func = funcByEndpoint[url.pathname]
        if (func) {
            return func(request)
        }
    }
    return errorResponse('invalidEndpoint')
}

await serve(handler, { hostname: secrets.lanAddress, port: secrets.lanPort })
