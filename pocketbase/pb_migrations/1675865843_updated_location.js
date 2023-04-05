migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mfgzbwil4ihk0be")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9wfoqurp",
    "name": "accounts",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "xzvvjkso4mzdcpy",
      "cascadeDelete": true,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mfgzbwil4ihk0be")

  // remove
  collection.schema.removeField("9wfoqurp")

  return dao.saveCollection(collection)
})
