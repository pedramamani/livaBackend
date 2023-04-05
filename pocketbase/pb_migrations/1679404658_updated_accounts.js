migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  // remove
  collection.schema.removeField("zm5pwlap")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zm5pwlap",
    "name": "activeDevice",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "6696je6fjdyfohr",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
