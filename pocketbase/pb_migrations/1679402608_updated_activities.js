migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("86i4o689d0raqmv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9zpaedem",
    "name": "parent",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("86i4o689d0raqmv")

  // update
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

  return dao.saveCollection(collection)
})
