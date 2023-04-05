migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vgofdzd8llray67")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7fwi5bmx",
    "name": "formFactor",
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
  const collection = dao.findCollectionByNameOrId("vgofdzd8llray67")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7fwi5bmx",
    "name": "platform",
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
