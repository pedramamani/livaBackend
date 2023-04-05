migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ium8byze",
    "name": "pin",
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
    "id": "odjwvk6n",
    "name": "activeDevice",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "6696je6fjdyfohr",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uvnljwng",
    "name": "rootActivity",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cppdozao",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n506v7ta",
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
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  // remove
  collection.schema.removeField("ium8byze")

  // remove
  collection.schema.removeField("odjwvk6n")

  // remove
  collection.schema.removeField("uvnljwng")

  // remove
  collection.schema.removeField("cppdozao")

  // remove
  collection.schema.removeField("n506v7ta")

  // remove
  collection.schema.removeField("8wz4rsww")

  return dao.saveCollection(collection)
})
