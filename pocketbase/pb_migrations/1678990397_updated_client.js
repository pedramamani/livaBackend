migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vgofdzd8llray67")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zecxvd4y",
    "name": "model",
    "type": "text",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("vgofdzd8llray67")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zecxvd4y",
    "name": "deviceModel",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
