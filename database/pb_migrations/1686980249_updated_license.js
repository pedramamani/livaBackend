migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5tmpk02zy10ss3b")

  // remove
  collection.schema.removeField("mbcnilcp")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5tmpk02zy10ss3b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mbcnilcp",
    "name": "released",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
