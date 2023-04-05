migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // remove
  collection.schema.removeField("js1qhcy7")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "js1qhcy7",
    "name": "activities",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": true,
      "maxSelect": 1000,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
