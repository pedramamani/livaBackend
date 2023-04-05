migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vlntqox5",
    "name": "records",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "paocdiux21ajcok",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // remove
  collection.schema.removeField("vlntqox5")

  return dao.saveCollection(collection)
})
