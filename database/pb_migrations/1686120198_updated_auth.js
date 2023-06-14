migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("02bl8hmwrqu2nxk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1vbezccy",
    "name": "pin",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("02bl8hmwrqu2nxk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1vbezccy",
    "name": "hash",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
