migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // remove
  collection.schema.removeField("qghssjkl")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qghssjkl",
    "name": "lastSessions",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "g1wpt4yvfya5cs2",
      "cascadeDelete": false,
      "maxSelect": 5,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
