migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jndrmrck",
    "name": "otps",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "jxhesk1bip1fdrb",
      "cascadeDelete": false,
      "maxSelect": 5,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jndrmrck",
    "name": "otps",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "jxhesk1bip1fdrb",
      "cascadeDelete": false,
      "maxSelect": 3,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
