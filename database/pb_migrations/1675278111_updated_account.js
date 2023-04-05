migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qy4sbxpa",
    "name": "username",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 5,
      "max": 16,
      "pattern": "^[a-zA-Z0-9]+$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // remove
  collection.schema.removeField("qy4sbxpa")

  return dao.saveCollection(collection)
})
