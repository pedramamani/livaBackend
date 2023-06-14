migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  // remove
  collection.schema.removeField("dj3bnkd9")

  // remove
  collection.schema.removeField("psnpvwjc")

  // remove
  collection.schema.removeField("pzqfnzyu")

  // remove
  collection.schema.removeField("stwwtwfw")

  // remove
  collection.schema.removeField("rexvykum")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fbtg6dro",
    "name": "card",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "eibmh6b2p7dwmgy",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dj3bnkd9",
    "name": "username",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "psnpvwjc",
    "name": "firstName",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pzqfnzyu",
    "name": "avatarShape",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "stwwtwfw",
    "name": "avatarColor",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rexvykum",
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

  // remove
  collection.schema.removeField("fbtg6dro")

  return dao.saveCollection(collection)
})
