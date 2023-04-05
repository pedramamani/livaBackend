migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5celmgc6",
    "name": "session",
    "type": "relation",
    "required": false,
    "unique": true,
    "options": {
      "collectionId": "g1wpt4yvfya5cs2",
      "cascadeDelete": true,
      "maxSelect": 1,
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
    "id": "5celmgc6",
    "name": "session",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "g1wpt4yvfya5cs2",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
