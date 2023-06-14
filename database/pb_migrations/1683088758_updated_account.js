migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fbtg6dro",
    "name": "card",
    "type": "relation",
    "required": true,
    "unique": true,
    "options": {
      "collectionId": "eibmh6b2p7dwmgy",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fbtg6dro",
    "name": "card",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "eibmh6b2p7dwmgy",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
