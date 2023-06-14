migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1jub36ealfk3f8t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2bessd0z",
    "name": "expiry",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1jub36ealfk3f8t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2bessd0z",
    "name": "expiry",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
