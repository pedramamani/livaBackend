migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("paocdiux21ajcok")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f8caqxmx",
    "name": "start",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "btf2exjv",
    "name": "end",
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
  const collection = dao.findCollectionByNameOrId("paocdiux21ajcok")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f8caqxmx",
    "name": "start",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1672560000,
      "max": 2524608000
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "btf2exjv",
    "name": "end",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1672560000,
      "max": 2524608000
    }
  }))

  return dao.saveCollection(collection)
})
