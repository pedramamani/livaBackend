migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mfgzbwil4ihk0be")

  // remove
  collection.schema.removeField("k4z0ing3")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mfgzbwil4ihk0be")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k4z0ing3",
    "name": "timeZone",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
