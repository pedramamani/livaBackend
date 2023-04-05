migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1tv4ykf1u6sfzve")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7j8lc2wh",
    "name": "children",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": true,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1tv4ykf1u6sfzve")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7j8lc2wh",
    "name": "activities",
    "type": "relation",
    "required": true,
    "unique": true,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": true,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
