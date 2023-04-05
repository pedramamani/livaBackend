migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wqpl5ib9",
    "name": "accounts",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "xzvvjkso4mzdcpy",
      "cascadeDelete": false,
      "maxSelect": 8,
      "displayFields": []
    }
  }))

  // add
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  // remove
  collection.schema.removeField("wqpl5ib9")

  // remove
  collection.schema.removeField("a14jiuu9")

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
      "pattern": "^[a-zA-Z0-9]$"
    }
  }))

  return dao.saveCollection(collection)
})
