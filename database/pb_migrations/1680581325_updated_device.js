migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  // remove
  collection.schema.removeField("jkaibudb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "czvcdbvg",
    "name": "keyExpiry",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jkaibudb",
    "name": "keyExpiry",
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
  collection.schema.removeField("czvcdbvg")

  return dao.saveCollection(collection)
})
