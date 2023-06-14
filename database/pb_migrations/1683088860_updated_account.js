migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  // remove
  collection.schema.removeField("odjwvk6n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qqlzipqc",
    "name": "license",
    "type": "relation",
    "required": true,
    "unique": true,
    "options": {
      "collectionId": "5tmpk02zy10ss3b",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uvnljwng",
    "name": "tree",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cppdozao",
    "name": "recordings",
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
    "id": "n506v7ta",
    "name": "activeRecording",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

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

  // remove
  collection.schema.removeField("qqlzipqc")

  // update
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

  // update
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

  // update
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

  return dao.saveCollection(collection)
})
