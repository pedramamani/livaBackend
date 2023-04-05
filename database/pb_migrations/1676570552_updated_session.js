migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g1wpt4yvfya5cs2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m4etupxh",
    "name": "device",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "6696je6fjdyfohr",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fmtomz6b",
    "name": "account",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "xzvvjkso4mzdcpy",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kmip50zh",
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
    "id": "kbfufcrj",
    "name": "keyExpiry",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g1wpt4yvfya5cs2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m4etupxh",
    "name": "device",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "6696je6fjdyfohr",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fmtomz6b",
    "name": "account",
    "type": "relation",
    "required": true,
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
    "id": "kmip50zh",
    "name": "key",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 8,
      "max": 8,
      "pattern": "^[a-zA-Z0-9]+$"
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kbfufcrj",
    "name": "keyExpiry",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 1672560000,
      "max": 2524608000
    }
  }))

  return dao.saveCollection(collection)
})
