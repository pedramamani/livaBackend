migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  collection.name = "profile"

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pzqfnzyu",
    "name": "avatarImage",
    "type": "text",
    "required": false,
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
    "required": false,
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

  collection.name = "accountInfo"

  // remove
  collection.schema.removeField("psnpvwjc")

  // remove
  collection.schema.removeField("pzqfnzyu")

  // remove
  collection.schema.removeField("stwwtwfw")

  return dao.saveCollection(collection)
})
