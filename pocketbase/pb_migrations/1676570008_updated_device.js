migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

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
    "id": "wqpl5ib9",
    "name": "accounts",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "xzvvjkso4mzdcpy",
      "cascadeDelete": true,
      "maxSelect": 5,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a14jiuu9",
    "name": "account",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "xzvvjkso4mzdcpy",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5celmgc6",
    "name": "session",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "g1wpt4yvfya5cs2",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rgtx6qdd",
    "name": "address",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 64,
      "max": 64,
      "pattern": "^[a-zA-Z0-9]+$"
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
      "maxSelect": 1,
      "displayFields": []
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
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wqpl5ib9",
    "name": "accounts",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "xzvvjkso4mzdcpy",
      "cascadeDelete": true,
      "maxSelect": 8,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a14jiuu9",
    "name": "lastAccount",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "xzvvjkso4mzdcpy",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5celmgc6",
    "name": "activeSessions",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "g1wpt4yvfya5cs2",
      "cascadeDelete": false,
      "maxSelect": 3,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
