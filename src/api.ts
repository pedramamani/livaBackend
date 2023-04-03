import { serve } from 'https://deno.land/std@0.178.0/http/server.ts'
import { database } from './database.ts'
import { Key, Error, Endpoint } from './base.ts'
import { hostname, port} from './config.ts'
import { json } from './utils.ts'


await serve(handler, {hostname, port})

function handler(request: Request) {
    if (request.method != 'POST') {
        return new Response(Error.invalidEndpoint, { status: 405 })
    }

    const url = new URL(request.url)
    switch (url.pathname) {
        case Endpoint.init:
            return init(request)
    }
    
    return new Response(Error.invalidEndpoint, { status: 404 })
}



export async function init(request: Request) {
    const ip = request.headers.get('host')
    const userAgent = request.headers.get('user-agent')
    if (!ip || !userAgent) {
        return new Response(Error.invalidRequest, { status: 400 })
    }

    const location = await database.newLocation(ip)
    const client = await database.newClient(userAgent)
    console.log(location, client)
    if (!client) {
        return new Response(Error.invalidRequest, { status: 400 })
    }

    const device = await database.newDevice(location, client, 'light')
    return json(device)
}
