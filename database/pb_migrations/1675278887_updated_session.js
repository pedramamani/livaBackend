migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("op9amoy1797wit5")

  // remove
  collection.schema.removeField("wkqjnfpr")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("op9amoy1797wit5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wkqjnfpr",
    "name": "active",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
