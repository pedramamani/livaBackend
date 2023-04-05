migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("86i4o689d0raqmv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9zpaedem",
    "name": "parent",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ttlspdqh",
    "name": "depth",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 5
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("86i4o689d0raqmv")

  // remove
  collection.schema.removeField("9zpaedem")

  // remove
  collection.schema.removeField("ttlspdqh")

  return dao.saveCollection(collection)
})
