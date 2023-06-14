migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("paocdiux21ajcok")

  collection.indexes = [
    "CREATE INDEX `_paocdiux21ajcok_created_idx` ON `recording` (`created`)"
  ]

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
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("paocdiux21ajcok")

  collection.indexes = [
    "CREATE INDEX `_paocdiux21ajcok_created_idx` ON \"recording\" (`created`)"
  ]

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
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
