migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g1wpt4yvfya5cs2")

  // remove
  collection.schema.removeField("m4etupxh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fmtomz6b",
    "name": "account",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "r8528b8o0i96nnh",
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
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g1wpt4yvfya5cs2")

  // add
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

  return dao.saveCollection(collection)
})
