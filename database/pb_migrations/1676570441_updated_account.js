migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vlntqox5",
    "name": "records",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "paocdiux21ajcok",
      "cascadeDelete": true,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uvhj68yd",
    "name": "activeRecord",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "paocdiux21ajcok",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jndrmrck",
    "name": "otp",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "jxhesk1bip1fdrb",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vlntqox5",
    "name": "records",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "paocdiux21ajcok",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uvhj68yd",
    "name": "activeRecord",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "paocdiux21ajcok",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jndrmrck",
    "name": "otps",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "jxhesk1bip1fdrb",
      "cascadeDelete": false,
      "maxSelect": 5,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
