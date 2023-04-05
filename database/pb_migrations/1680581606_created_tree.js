migrate((db) => {
  const collection = new Collection({
    "id": "1tv4ykf1u6sfzve",
    "created": "2023-04-04 04:13:26.677Z",
    "updated": "2023-04-04 04:13:26.677Z",
    "name": "tree",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mnbv0ccj",
        "name": "root",
        "type": "relation",
        "required": true,
        "unique": true,
        "options": {
          "collectionId": "86i4o689d0raqmv",
          "cascadeDelete": true,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "7j8lc2wh",
        "name": "activities",
        "type": "relation",
        "required": true,
        "unique": true,
        "options": {
          "collectionId": "86i4o689d0raqmv",
          "cascadeDelete": true,
          "maxSelect": null,
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
  const collection = dao.findCollectionByNameOrId("1tv4ykf1u6sfzve");

  return dao.deleteCollection(collection);
})
