migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("86i4o689d0raqmv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zapub46u",
    "name": "starred",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("86i4o689d0raqmv")

  // remove
  collection.schema.removeField("zapub46u")

  return dao.saveCollection(collection)
})
