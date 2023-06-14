migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  collection.indexes = [
    "CREATE INDEX `_r8528b8o0i96nnh_created_idx` ON `account` (`created`)",
    "CREATE UNIQUE INDEX `idx_unique_fbtg6dro` ON `account` (`card`)",
    "CREATE UNIQUE INDEX `idx_unique_qqlzipqc` ON `account` (`license`)"
  ]

  // remove
  collection.schema.removeField("8wz4rsww")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fbtg6dro",
    "name": "card",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "eibmh6b2p7dwmgy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qqlzipqc",
    "name": "license",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "5tmpk02zy10ss3b",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  collection.indexes = [
    "CREATE INDEX `_r8528b8o0i96nnh_created_idx` ON \"account\" (`created`)",
    "CREATE UNIQUE INDEX \"idx_unique_fbtg6dro\" on \"account\" (\"card\")",
    "CREATE UNIQUE INDEX \"idx_unique_qqlzipqc\" on \"account\" (\"license\")"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8wz4rsww",
    "name": "activities",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fbtg6dro",
    "name": "card",
    "type": "relation",
    "required": true,
    "unique": true,
    "options": {
      "collectionId": "eibmh6b2p7dwmgy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qqlzipqc",
    "name": "license",
    "type": "relation",
    "required": true,
    "unique": true,
    "options": {
      "collectionId": "5tmpk02zy10ss3b",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
