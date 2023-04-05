migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1tv4ykf1u6sfzve")

  // remove
  collection.schema.removeField("mnbv0ccj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xuza9lez",
    "name": "activity",
    "type": "relation",
    "required": false,
    "unique": true,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7j8lc2wh",
    "name": "children",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1tv4ykf1u6sfzve",
      "cascadeDelete": true,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1tv4ykf1u6sfzve")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mnbv0ccj",
    "name": "root",
    "type": "relation",
    "required": true,
    "unique": true,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("xuza9lez")

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
})
