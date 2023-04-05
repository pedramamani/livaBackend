migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jxhesk1bip1fdrb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q0mqdsjp",
    "name": "failCount",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 3
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jxhesk1bip1fdrb")

  // remove
  collection.schema.removeField("q0mqdsjp")

  return dao.saveCollection(collection)
})
