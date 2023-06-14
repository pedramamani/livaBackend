migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eibmh6b2p7dwmgy")

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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eibmh6b2p7dwmgy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pb28i5me",
    "name": "username",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
