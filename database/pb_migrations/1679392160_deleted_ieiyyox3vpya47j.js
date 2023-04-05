migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("p9iwoflix99f0g4");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "p9iwoflix99f0g4",
    "created": "2023-03-21 09:49:05.496Z",
    "updated": "2023-03-21 09:49:05.496Z",
    "name": "ieiyyox3vpya47j",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "avnbextr",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
