migrate((db) => {
  const collection = new Collection({
    "id": "g1wpt4yvfya5cs2",
    "created": "2023-02-01 19:20:58.961Z",
    "updated": "2023-02-01 19:20:58.961Z",
    "name": "s",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m4etupxh",
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
        "id": "fmtomz6b",
        "name": "account",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "xzvvjkso4mzdcpy",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "kmip50zh",
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
        "id": "kbfufcrj",
        "name": "keyExpiry",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 1672560000,
          "max": 2524608000
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
  const collection = dao.findCollectionByNameOrId("g1wpt4yvfya5cs2");

  return dao.deleteCollection(collection);
})
