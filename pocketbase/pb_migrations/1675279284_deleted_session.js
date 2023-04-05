migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("op9amoy1797wit5");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "op9amoy1797wit5",
    "created": "2023-02-01 19:13:40.460Z",
    "updated": "2023-02-01 19:14:47.880Z",
    "name": "session",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kcmumplq",
        "name": "device",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "6696je6fjdyfohr",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "5rcczo9h",
        "name": "key",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 8,
          "max": 8,
          "pattern": "^[a-zA-Z0-9]+$"
        }
      },
      {
        "system": false,
        "id": "gfcew3yq",
        "name": "keyExpiry",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1672560000,
          "max": 2524636800
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
