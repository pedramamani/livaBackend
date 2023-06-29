migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tbbnqmc4663o6sf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kbure1ym",
    "name": "city",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oyciph3h",
    "name": "region",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "plywhp0c",
    "name": "timeZone",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jde9egyk",
    "name": "countryCode",
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
  const collection = dao.findCollectionByNameOrId("tbbnqmc4663o6sf")

  // remove
  collection.schema.removeField("kbure1ym")

  // remove
  collection.schema.removeField("oyciph3h")

  // remove
  collection.schema.removeField("plywhp0c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jde9egyk",
    "name": "field",
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
