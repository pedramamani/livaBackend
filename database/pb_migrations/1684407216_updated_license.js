migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5tmpk02zy10ss3b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mbcnilcp",
    "name": "isReleased",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dh9rfl4v",
    "name": "isConsumed",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5tmpk02zy10ss3b")

  // remove
  collection.schema.removeField("mbcnilcp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dh9rfl4v",
    "name": "isValid",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
