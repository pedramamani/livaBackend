migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vgofdzd8llray67")

  // remove
  collection.schema.removeField("7llyut6p")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vgofdzd8llray67")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7llyut6p",
    "name": "type",
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
