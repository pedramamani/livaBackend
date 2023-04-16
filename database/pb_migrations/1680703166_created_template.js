migrate((db) => {
  const collection = new Collection({
    "id": "v2skijp1m4ot8xd",
    "created": "2023-04-05 13:59:26.965Z",
    "updated": "2023-04-05 13:59:26.965Z",
    "name": "template",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hxto1nhx",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xcezlolu",
        "name": "tree",
        "type": "relation",
        "required": true,
        "unique": true,
        "options": {
          "collectionId": "86i4o689d0raqmv",
          "cascadeDelete": true,
          "maxSelect": 1,
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
  const collection = dao.findCollectionByNameOrId("v2skijp1m4ot8xd");

  return dao.deleteCollection(collection);
})
