migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gsow2rst",
    "name": "pin",
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
    "id": "osdi62c3",
    "name": "devices",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "6696je6fjdyfohr",
      "cascadeDelete": true,
      "maxSelect": 5,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jp7lfwpt",
    "name": "rootActivity",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "js1qhcy7",
    "name": "activities",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": true,
      "maxSelect": 1000,
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
    "id": "gsow2rst",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "osdi62c3",
    "name": "devices",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "6696je6fjdyfohr",
      "cascadeDelete": true,
      "maxSelect": 5,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jp7lfwpt",
    "name": "rootActivity",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "js1qhcy7",
    "name": "activities",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "86i4o689d0raqmv",
      "cascadeDelete": true,
      "maxSelect": 1000,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
