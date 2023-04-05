migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("g1wpt4yvfya5cs2");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "g1wpt4yvfya5cs2",
    "created": "2023-02-01 19:20:58.961Z",
    "updated": "2023-03-21 10:12:06.474Z",
    "name": "sessions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fmtomz6b",
        "name": "account",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "r8528b8o0i96nnh",
          "cascadeDelete": true,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "kmip50zh",
        "name": "key",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kbfufcrj",
        "name": "expiry",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
