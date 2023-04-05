migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g1wpt4yvfya5cs2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kbfufcrj",
    "name": "expiry",
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
  const collection = dao.findCollectionByNameOrId("g1wpt4yvfya5cs2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kbfufcrj",
    "name": "keyExpiry",
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
