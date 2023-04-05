migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qy4sbxpa",
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
    "id": "p0ggtzfe",
    "name": "name",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qy4sbxpa",
    "name": "username",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 5,
      "max": 16,
      "pattern": "^[a-zA-Z0-9]+$"
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p0ggtzfe",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 16,
      "pattern": "^[A-Z][a-z]*$"
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gsow2rst",
    "name": "passcode",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 6,
      "max": 32,
      "pattern": "^[0-9]+$"
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
      "cascadeDelete": false,
      "maxSelect": 5,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
