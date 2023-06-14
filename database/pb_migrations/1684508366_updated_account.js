migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  // remove
  collection.schema.removeField("ium8byze")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ujqx4fbo",
    "name": "auth",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "02bl8hmwrqu2nxk",
      "cascadeDelete": false,
      "minSelect": null,
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

  // remove
  collection.schema.removeField("ujqx4fbo")

  return dao.saveCollection(collection)
})
