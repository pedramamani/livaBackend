migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("86i4o689d0raqmv")

  // remove
  collection.schema.removeField("uzsib9t8")

  // remove
  collection.schema.removeField("8cllkw14")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("86i4o689d0raqmv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uzsib9t8",
    "name": "parent",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8cllkw14",
    "name": "value",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
