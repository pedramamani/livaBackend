migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5tmpk02zy10ss3b")

  collection.indexes = [
    "CREATE INDEX `_5tmpk02zy10ss3b_created_idx` ON `license` (`created`)",
    "CREATE UNIQUE INDEX `idx_unique_0yhahyur` ON `license` (`key`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0yhahyur",
    "name": "key",
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
  const collection = dao.findCollectionByNameOrId("5tmpk02zy10ss3b")

  collection.indexes = [
    "CREATE INDEX `_5tmpk02zy10ss3b_created_idx` ON `license` (`created`)",
    "CREATE UNIQUE INDEX `idx_unique_0yhahyur` ON `license` (`licenseKey`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0yhahyur",
    "name": "licenseKey",
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
})
