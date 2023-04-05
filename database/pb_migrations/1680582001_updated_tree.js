migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1tv4ykf1u6sfzve")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xuza9lez",
    "name": "activity",
    "type": "relation",
    "required": true,
    "unique": true,
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
  const collection = dao.findCollectionByNameOrId("1tv4ykf1u6sfzve")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xuza9lez",
    "name": "activity",
    "type": "relation",
    "required": false,
    "unique": true,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
