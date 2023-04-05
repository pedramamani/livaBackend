migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7wfzs8kq",
    "name": "owner",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "1hurfkw7qdapo56",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gsow2rst",
    "name": "passcode",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 6,
      "max": 32,
      "pattern": "^[0-9]+$"
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p0ggtzfe",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 16,
      "pattern": "^[A-Z][a-z]*$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // remove
  collection.schema.removeField("7wfzs8kq")

  // remove
  collection.schema.removeField("gsow2rst")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p0ggtzfe",
    "name": "firstName",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 16,
      "pattern": "^[A-Z][a-z]*$"
    }
  }))

  return dao.saveCollection(collection)
})
