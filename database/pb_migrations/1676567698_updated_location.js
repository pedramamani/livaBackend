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
      "min": 7,
      "max": 15,
      "pattern": "^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$"
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kys4s7to",
    "name": "countryCode",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 2,
      "max": 2,
      "pattern": "^[A-Z]{2}$"
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
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^\\d+\\.\\d+\\.\\d+\\.\\d+$"
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kys4s7to",
    "name": "countryCode",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^[A-Z]{2}$"
    }
  }))

  return dao.saveCollection(collection)
})
