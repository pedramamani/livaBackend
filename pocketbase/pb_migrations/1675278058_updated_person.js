migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1hurfkw7qdapo56")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "exg9vcmi",
    "name": "phoneNumber",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 12,
      "max": 12,
      "pattern": "^\\+1[0-9]*$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1hurfkw7qdapo56")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "exg9vcmi",
    "name": "phoneNumber",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 11,
      "max": 11,
      "pattern": "^\\+1[0-9]{10}$"
    }
  }))

  return dao.saveCollection(collection)
})
