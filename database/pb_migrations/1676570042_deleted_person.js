migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1hurfkw7qdapo56");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "1hurfkw7qdapo56",
    "created": "2023-02-01 18:53:14.859Z",
    "updated": "2023-02-01 19:02:04.562Z",
    "name": "person",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "exg9vcmi",
        "name": "phoneNumber",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 12,
          "max": 12,
          "pattern": "^\\+1[0-9]+$"
        }
      },
      {
        "system": false,
        "id": "lcrild5u",
        "name": "accounts",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "xzvvjkso4mzdcpy",
          "cascadeDelete": false,
          "maxSelect": 5,
          "displayFields": []
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
