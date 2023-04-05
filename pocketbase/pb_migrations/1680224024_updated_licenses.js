migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5tmpk02zy10ss3b")

  collection.name = "license"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0yhahyur",
    "name": "licenseKey",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5tmpk02zy10ss3b")

  collection.name = "licenses"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0yhahyur",
    "name": "licenseKey",
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
