migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("02bl8hmwrqu2nxk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oeznidyv",
    "name": "lastFail",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("02bl8hmwrqu2nxk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oeznidyv",
    "name": "lastAttempt",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
