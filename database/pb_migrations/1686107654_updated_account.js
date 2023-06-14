migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  // remove
  collection.schema.removeField("zbpckobt")

  // remove
  collection.schema.removeField("vmf7cox7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w2vc8b29",
    "name": "otp",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1jub36ealfk3f8t",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zbpckobt",
    "name": "otp",
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
    "id": "vmf7cox7",
    "name": "otpExpiry",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("w2vc8b29")

  return dao.saveCollection(collection)
})
