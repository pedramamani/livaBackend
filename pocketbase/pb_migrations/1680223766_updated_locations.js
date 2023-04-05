migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mfgzbwil4ihk0be")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ptuij2pc",
    "name": "ip",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 34,
      "max": 55,
      "pattern": "[as]+"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mfgzbwil4ihk0be")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ptuij2pc",
    "name": "ip",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
