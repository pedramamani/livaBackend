migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eibmh6b2p7dwmgy")

  collection.name = "profile"
  collection.indexes = [
    "CREATE INDEX `_eibmh6b2p7dwmgy_created_idx` ON `profile` (`created`)",
    "CREATE UNIQUE INDEX `idx_unique_pb28i5me` ON `profile` (`username`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pb28i5me",
    "name": "username",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eibmh6b2p7dwmgy")

  collection.name = "accountCard"
  collection.indexes = [
    "CREATE INDEX `_eibmh6b2p7dwmgy_created_idx` ON `accountCard` (`created`)",
    "CREATE UNIQUE INDEX \"idx_unique_pb28i5me\" on \"accountCard\" (\"username\")"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pb28i5me",
    "name": "username",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
