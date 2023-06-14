migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  collection.indexes = [
    "CREATE INDEX `_6696je6fjdyfohr_created_idx` ON `device` (`created`)",
    "CREATE UNIQUE INDEX `idx_unique_rgtx6qdd` ON `device` (`address`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rgtx6qdd",
    "name": "address",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wmxgn26l",
    "name": "location",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "mfgzbwil4ihk0be",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "li0vbrau",
    "name": "client",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "vgofdzd8llray67",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wqpl5ib9",
    "name": "cards",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "eibmh6b2p7dwmgy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  collection.indexes = [
    "CREATE INDEX `_6696je6fjdyfohr_created_idx` ON \"device\" (`created`)",
    "CREATE UNIQUE INDEX \"idx_unique_rgtx6qdd\" on \"device\" (\"address\")"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rgtx6qdd",
    "name": "address",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wmxgn26l",
    "name": "location",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "mfgzbwil4ihk0be",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "li0vbrau",
    "name": "client",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "vgofdzd8llray67",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wqpl5ib9",
    "name": "cards",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "eibmh6b2p7dwmgy",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
