migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5tmpk02zy10ss3b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0yhahyur",
    "name": "key",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dh9rfl4v",
    "name": "isValid",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5tmpk02zy10ss3b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0yhahyur",
    "name": "key",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 10,
      "max": 10,
      "pattern": "^[0-9]*$"
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dh9rfl4v",
    "name": "valid",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
