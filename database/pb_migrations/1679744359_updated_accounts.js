migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fbepksc5",
    "name": "accountData",
    "type": "relation",
    "required": false,
    "unique": true,
    "options": {
      "collectionId": "xzvvjkso4mzdcpy",
      "cascadeDelete": true,
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
    "id": "fbepksc5",
    "name": "data",
    "type": "relation",
    "required": false,
    "unique": true,
    "options": {
      "collectionId": "xzvvjkso4mzdcpy",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
