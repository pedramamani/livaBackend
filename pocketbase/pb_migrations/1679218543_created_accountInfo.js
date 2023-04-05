migrate((db) => {
  const collection = new Collection({
    "id": "r8528b8o0i96nnh",
    "created": "2023-03-19 09:35:43.079Z",
    "updated": "2023-03-19 09:35:43.079Z",
    "name": "accountInfo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dj3bnkd9",
        "name": "username",
        "type": "text",
        "required": false,
        "unique": true,
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh");

  return dao.deleteCollection(collection);
})
