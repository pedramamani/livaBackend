migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // remove
  collection.schema.removeField("jndrmrck")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jndrmrck",
    "name": "otp",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "jxhesk1bip1fdrb",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
