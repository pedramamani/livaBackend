migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5celmgc6",
    "name": "activeSessions",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "op9amoy1797wit5",
      "cascadeDelete": false,
      "maxSelect": 5,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  // remove
  collection.schema.removeField("5celmgc6")

  return dao.saveCollection(collection)
})
