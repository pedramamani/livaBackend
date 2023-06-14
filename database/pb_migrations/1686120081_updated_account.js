migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  collection.indexes = [
    "CREATE INDEX `_r8528b8o0i96nnh_created_idx` ON `account` (`created`)",
    "CREATE UNIQUE INDEX `idx_unique_fbtg6dro` ON `account` (`profile`)",
    "CREATE UNIQUE INDEX `idx_unique_qqlzipqc` ON `account` (`license`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fbtg6dro",
    "name": "profile",
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
    "id": "ujqx4fbo",
    "name": "auth",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "02bl8hmwrqu2nxk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n506v7ta",
    "name": "recording",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "paocdiux21ajcok",
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
    "CREATE INDEX `_r8528b8o0i96nnh_created_idx` ON `account` (`created`)",
    "CREATE UNIQUE INDEX `idx_unique_fbtg6dro` ON `account` (`card`)",
    "CREATE UNIQUE INDEX `idx_unique_qqlzipqc` ON `account` (`license`)"
  ]

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
    "id": "ujqx4fbo",
    "name": "auth",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "02bl8hmwrqu2nxk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n506v7ta",
    "name": "activeRecording",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "paocdiux21ajcok",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
