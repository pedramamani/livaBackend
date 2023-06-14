migrate((db) => {
  const collection = new Collection({
    "id": "1jub36ealfk3f8t",
    "created": "2023-06-07 03:12:39.088Z",
    "updated": "2023-06-07 03:12:39.088Z",
    "name": "otp",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "viotwiqi",
        "name": "code",
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
        "id": "dukblwtn",
        "name": "fails",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "2bessd0z",
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
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("1jub36ealfk3f8t");

  return dao.deleteCollection(collection);
})
