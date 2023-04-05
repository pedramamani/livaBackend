migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mfgzbwil4ihk0be")

  // remove
  collection.schema.removeField("6jrz3zun")

  // remove
  collection.schema.removeField("48iw6ckn")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mfgzbwil4ihk0be")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6jrz3zun",
    "name": "latitude",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "48iw6ckn",
    "name": "longitude",
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
