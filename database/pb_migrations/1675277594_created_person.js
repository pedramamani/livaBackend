migrate((db) => {
  const collection = new Collection({
    "id": "1hurfkw7qdapo56",
    "created": "2023-02-01 18:53:14.859Z",
    "updated": "2023-02-01 18:53:14.859Z",
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
          "min": 11,
          "max": 11,
          "pattern": "^\\+1[0-9]{10}$"
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
          "collectionId": "6696je6fjdyfohr",
          "cascadeDelete": false,
          "maxSelect": 3,
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1hurfkw7qdapo56");

  return dao.deleteCollection(collection);
})
