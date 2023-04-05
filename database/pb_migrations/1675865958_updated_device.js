migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wqpl5ib9",
    "name": "accounts",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "xzvvjkso4mzdcpy",
      "cascadeDelete": true,
      "maxSelect": 8,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wqpl5ib9",
    "name": "accounts",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "xzvvjkso4mzdcpy",
      "cascadeDelete": false,
      "maxSelect": 8,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
