migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1jub36ealfk3f8t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "viotwiqi",
    "name": "code",
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
  const collection = dao.findCollectionByNameOrId("1jub36ealfk3f8t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "viotwiqi",
    "name": "code",
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
