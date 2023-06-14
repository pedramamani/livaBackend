import { serve } from "https://deno.land/std@0.178.0/http/server.ts"
import { database } from "./database.ts"
import {
    areValid,
    errorResponse,
    jsonResponse,
    port,
    secrets,
} from "./config.ts"
import { Endpoint } from "./base.ts"

const firstAccount = async (request: Request) => {
    const data = await request.json()
    if (!areValid(data, "username", "firstName", "theme", "pin", "licenseKey")) {
        return errorResponse("invalidRequest")
    }
    const license = await database.consumeLicenseKey(data.key)
    if (!license) {
        return errorResponse("invalidRequest", {
            licenseKey: "This key is invalid or has already been used.",
        })
    }

    const accountCard = await database.newProfile(
        data.username,
        data.firstName,
        data.theme,
    )
    const account = await database.newAccount(license, accountCard, data.pin)

    const device = await database.newDevice(account)
    return jsonResponse(device)
}

const funcByEndpoint: {
    [_ in Endpoint]: (request: Request) => Promise<Response>
} = {
    "/account/first": firstAccount,
}

const handler = (request: Request) => {
    if (request.method == "POST") {
        const url = new URL(request.url)
        const func = funcByEndpoint[url.pathname as Endpoint]
        if (func) {
            return func(request)
        }
    }
    return errorResponse("invalidEndpointOrMethod")
}

await serve(handler, { hostname: secrets.lanAddress, port: port })
