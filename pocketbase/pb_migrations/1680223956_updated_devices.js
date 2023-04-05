migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  collection.name = "device"

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
    "id": "uy9bycyt",
    "name": "key",
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
    "id": "jkaibudb",
    "name": "keyExpiry",
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
    "id": "0pyjzcxg",
    "name": "theme",
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
      "cascadeDelete": true,
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
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  collection.name = "devices"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rgtx6qdd",
    "name": "address",
    "type": "text",
    "required": false,
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
    "id": "uy9bycyt",
    "name": "key",
    "type": "text",
    "required": false,
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
    "id": "jkaibudb",
    "name": "keyExpiry",
    "type": "text",
    "required": false,
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wmxgn26l",
    "name": "location",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "mfgzbwil4ihk0be",
      "cascadeDelete": true,
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
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "vgofdzd8llray67",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
