migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("paocdiux21ajcok")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wi7eqkdp",
    "name": "activity",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("paocdiux21ajcok")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wi7eqkdp",
    "name": "activity",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
