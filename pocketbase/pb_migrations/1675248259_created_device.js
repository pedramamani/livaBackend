migrate((db) => {
  const collection = new Collection({
    "id": "6696je6fjdyfohr",
    "created": "2023-02-01 10:44:19.548Z",
    "updated": "2023-02-01 10:44:19.548Z",
    "name": "device",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rgtx6qdd",
        "name": "address",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 64,
          "max": 64,
          "pattern": "^[a-zA-Z0-9]{64}$"
        }
      },
      {
        "system": false,
        "id": "wmxgn26l",
        "name": "location",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "mfgzbwil4ihk0be",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "li0vbrau",
        "name": "field",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "vgofdzd8llray67",
          "cascadeDelete": false,
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
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr");

  return dao.deleteCollection(collection);
})
