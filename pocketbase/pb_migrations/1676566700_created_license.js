migrate((db) => {
  const collection = new Collection({
    "id": "5tmpk02zy10ss3b",
    "created": "2023-02-16 16:58:20.133Z",
    "updated": "2023-02-16 16:58:20.133Z",
    "name": "license",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0yhahyur",
        "name": "key",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 10,
          "max": 10,
          "pattern": "^[0-9]*$"
        }
      },
      {
        "system": false,
        "id": "dh9rfl4v",
        "name": "valid",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("5tmpk02zy10ss3b");

  return dao.deleteCollection(collection);
})
