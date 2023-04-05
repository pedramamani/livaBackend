migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  collection.name = "account"

  // update
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fbepksc5",
    "name": "accountData",
    "type": "relation",
    "required": true,
    "unique": true,
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

  // update
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

  // update
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

  // update
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  collection.name = "accounts"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dj3bnkd9",
    "name": "username",
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
    "id": "fbepksc5",
    "name": "accountData",
    "type": "relation",
    "required": false,
    "unique": true,
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
    "id": "psnpvwjc",
    "name": "firstName",
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
    "id": "pzqfnzyu",
    "name": "avatarShape",
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
    "id": "stwwtwfw",
    "name": "avatarColor",
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
    "id": "rexvykum",
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

  return dao.saveCollection(collection)
})
