migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1hurfkw7qdapo56")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lcrild5u",
    "name": "accounts",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "xzvvjkso4mzdcpy",
      "cascadeDelete": false,
      "maxSelect": 3,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1hurfkw7qdapo56")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lcrild5u",
    "name": "accounts",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "6696je6fjdyfohr",
      "cascadeDelete": false,
      "maxSelect": 3,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
