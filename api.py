from flask_cors import CORS
from flask import Flask, request
from utility import areValid, getErrors, extractKeys
from shared import Key, Endpoint, Error
from database import Database

api = Flask(__name__)
db = Database()

# validateStartDevice = Validate.fromKeys([key.Address, key.UserAgent, key.Theme])
# validateReloadDevice = Validate.fromKeys([key.Address, key.Key])
# validateSustainDevice = Validate.fromKeys([key.Address, key.Key])
# validateCreateAccount = Validate.fromKeys([key.Address, key.Key, key.FirstName, key.Username, key.Password])
# validateSignInAccount = Validate.fromKeys([key.Address, key.Key, key.Username, key.Password])


@api.route(Endpoint.init, methods=['POST'])
def init():
    data = request.json
    if not areValid(data, Key.userAgent, Key.theme):
        return {Key.error: Error.badRequest}

    location = db.newLocation(request.remote_addr)
    client = db.newClient(data[Key.userAgent])
    device = db.newDevice(location, client, data[Key.theme])
    return extractKeys(device, Key.address, Key.key)


@api.route(Endpoint.start, methods=['POST'])
def start():
    data = request.json
    if not areValid(data, Key.address):
        return {Key.error: Error.badRequest}

    device = db.startDevice(data[Key.address])
    return extractKeys(device, Key.key, Key.activeAccount, Key.accounts)


@api.route(Endpoint.sustain, methods=['POST'])
def sustain():
    data = request.json
    if not areValid(data, Key.address, Key.key):
        return {Key.error: Error.badRequest}
    if not db.deviceIsValid(data[Key.address], data[Key.key]):
        return {Key.error: Error.badDevice}

    db.sustainDevice(data[Key.address], data[Key.key])
    return {}


@api.route(Endpoint.signUp, methods=['POST'])
def signUp():
    data = request.json
    if not areValid(data, Key.address, Key.key, Key.licenseKey, Key.firstName, Key.username, Key.pin):
        return {Key.error: Error.badRequest}
    if not db.deviceIsValid(data[Key.address], data[Key.key]):
        return {Key.error: Error.badDevice}
    if not db.licenseKeyIsValid(data[Key.licenseKey]):
        return {Key.error: Error.form, Key.licenseKey: 'This key is invalid'}
    if db.usernameExists(data[Key.username]):
        return {Key.error: Error.form, Key.username: 'This username is taken'}

    device = db.find(Collection.devices, Key.address, data[Key.address])
    account = db.newAccount(device, data[Key.username], data[Key.firstName], data[Key.pin])
    return extractKeys(account, Key.accountData)


@api.route(Endpoint.signIn, methods=['POST'])
def signIn():
    data = request.json
    if not areValid(data, Key.address, Key.key, Key.username, Key.pin):
        return {Key.error: Error.badRequest}
    if not db.deviceIsValid(data[Key.address], data[Key.key]):
        return {Key.error: Error.badDevice}

    account = db.find(Collection.accounts, Key.username, data[Key.username])
    if not account:
        return {Key.error: Error.form, Key.username: 'This username does not exist'}
    if not db.pinIsValid(account, data[Key.pin]):
        return {Key.error: Error.form, Key.pin: 'This pin is invalid'}

    db.signInAccount(account)
    return extractKeys(account, Key.accountData)

# @api.route(core.route.StartDevice, methods=['POST'])
# def startDevice():
#     data = flask.request.json
#     if not core.validateStartDevice(data):
#         return core.error.BadRequest
#     data[Key.Ip] = flask.request.remote_addr

#     device = db.queryDevice(data)
#     if not device:
#         return core.error.InvalidAddress

#     device.start(data)
#     if not db.saveDevice(device):
#         return core.error.Sync

#     accounts = [db.getAccount(id) for id in device.data[Key.AccountIds]]
#     data = core.filterKeys(device.data, [Key.Address, Key.Key, Key.LastUsername])
#     data[Key.Accounts] = [
#         core.filterKeys(account.data, [Key.FirstName, Key.Username, Key.Image]) for account in accounts]
#     return data


# @api.route(core.route.ReloadDevice, methods=['POST'])
# def reloadDevice():
#     data = flask.request.json
#     if not core.validateReloadDevice(data):
#         return core.error.BadRequest

#     device = db.queryDevice(data)
#     if not device:
#         return core.error.InvalidAddress
#     if not device.checkKey(data):
#         return core.error.InvalidKey

#     device.sustain()
#     if not db.saveDevice(device):
#         return core.error.Sync

#     accounts = [db.getAccount(id) for id in device.data[Key.AccountIds]]
#     data = core.filterKeys(device.data, [Key.Address, Key.Key, Key.LastUsername])
#     data[Key.Accounts] = [
#         core.filterKeys(account.data, [Key.FirstName, Key.Username, Key.Image]) for account in accounts]
#     return data


# @api.route(core.route.SustainDevice, methods=['POST'])
# def sustainDevice():
#     data = flask.request.json
#     if not core.validateSustainDevice(data):
#         return core.error.BadRequest

#     device = db.queryDevice(data)
#     if not device:
#         return core.error.InvalidAddress
#     if not device.checkKey(data):
#         return core.error.InvalidKey

#     device.sustain()
#     if not db.saveDevice(device):
#         return core.error.Sync
#     return core.filterKeys(device.data, [Key.Key])


# @api.route(core.route.CreateAccount, methods=['POST'])
# def newAccount():
#     data = flask.request.json
#     if not core.validateCreateAccount(data):
#         return core.error.BadRequest

#     device = db.queryDevice(data)
#     if not device:
#         return core.error.InvalidAddress
#     if not device.checkKey(data):
#         return core.error.InvalidKey

#     if db.queryAccount(data):
#         return core.error.UsernameTaken

#     account = core.Account.new(data, device)
#     return device.dataNew(data)


if __name__ == '__main__':
    CORS(api)
    api.config['MAX_CONTENT_LENGTH'] = 1E7  # 10MB
    api.run(Host, Port, debug=True)
