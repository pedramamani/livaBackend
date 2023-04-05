migrate((db) => {
  const collection = new Collection({
    "id": "xzvvjkso4mzdcpy",
    "created": "2023-02-01 18:54:42.834Z",
    "updated": "2023-02-01 18:54:42.834Z",
    "name": "account",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "p0ggtzfe",
        "name": "firstName",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 16,
          "pattern": "^[A-Z][a-z]*$"
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy");

  return dao.deleteCollection(collection);
})
