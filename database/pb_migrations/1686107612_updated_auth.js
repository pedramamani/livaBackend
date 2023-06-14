migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("02bl8hmwrqu2nxk")

  // remove
  collection.schema.removeField("deyegzkp")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("02bl8hmwrqu2nxk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "deyegzkp",
    "name": "locked",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
