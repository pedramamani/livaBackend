migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  // remove
  collection.schema.removeField("fbepksc5")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fbepksc5",
    "name": "accountData",
    "type": "relation",
    "required": true,
    "unique": true,
    "options": {
      "collectionId": "xzvvjkso4mzdcpy",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
