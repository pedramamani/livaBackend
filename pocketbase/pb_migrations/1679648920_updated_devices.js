migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0pyjzcxg",
    "name": "theme",
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
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  // remove
  collection.schema.removeField("0pyjzcxg")

  return dao.saveCollection(collection)
})
