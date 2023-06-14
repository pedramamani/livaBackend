migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("02bl8hmwrqu2nxk")

  // remove
  collection.schema.removeField("eydopf7r")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("02bl8hmwrqu2nxk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eydopf7r",
    "name": "salt",
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
