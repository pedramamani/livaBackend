migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eg9mlf1l2ou4txf")

  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": true,
    "allowUsernameAuth": false,
    "exceptEmailDomains": null,
    "manageRule": null,
    "minPasswordLength": 6,
    "onlyEmailDomains": [
      "gmail.com",
      "yahoo.com"
    ],
    "requireEmail": true
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eg9mlf1l2ou4txf")

  collection.options = {
    "allowEmailAuth": false,
    "allowOAuth2Auth": true,
    "allowUsernameAuth": true,
    "exceptEmailDomains": null,
    "manageRule": null,
    "minPasswordLength": 6,
    "onlyEmailDomains": null,
    "requireEmail": true
  }

  return dao.saveCollection(collection)
})
