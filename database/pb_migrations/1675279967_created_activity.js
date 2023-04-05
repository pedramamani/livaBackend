migrate((db) => {
  const collection = new Collection({
    "id": "86i4o689d0raqmv",
    "created": "2023-02-01 19:32:47.745Z",
    "updated": "2023-02-01 19:32:47.745Z",
    "name": "activity",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ueucctkh",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 30,
          "pattern": "^[a-zA-Z-]+$"
        }
      },
      {
        "system": false,
        "id": "nmyftanb",
        "name": "subs",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "mfgzbwil4ihk0be",
          "cascadeDelete": false,
          "maxSelect": 20,
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
  const collection = dao.findCollectionByNameOrId("86i4o689d0raqmv");

  return dao.deleteCollection(collection);
})
