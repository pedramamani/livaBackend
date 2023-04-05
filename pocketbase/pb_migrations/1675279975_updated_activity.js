migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("86i4o689d0raqmv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nmyftanb",
    "name": "subs",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": false,
      "maxSelect": 20,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("86i4o689d0raqmv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nmyftanb",
    "name": "subs",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "mfgzbwil4ihk0be",
      "cascadeDelete": false,
      "maxSelect": 20,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
