migrate((db) => {
  const collection = new Collection({
    "id": "02bl8hmwrqu2nxk",
    "created": "2023-05-19 14:57:49.584Z",
    "updated": "2023-05-19 14:57:49.584Z",
    "name": "auth",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1vbezccy",
        "name": "hash",
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
        "id": "eydopf7r",
        "name": "salt",
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
        "id": "nz9xtxpm",
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
        "id": "oeznidyv",
        "name": "lastAttempt",
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
        "id": "deyegzkp",
        "name": "locked",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("02bl8hmwrqu2nxk");

  return dao.deleteCollection(collection);
})
