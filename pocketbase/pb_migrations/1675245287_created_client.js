migrate((db) => {
  const collection = new Collection({
    "id": "vgofdzd8llray67",
    "created": "2023-02-01 09:54:47.234Z",
    "updated": "2023-02-01 09:54:47.234Z",
    "name": "client",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u1gfimww",
        "name": "userAgent",
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
        "id": "lxxqxbwj",
        "name": "os",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "febaueu3",
        "name": "browser",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zecxvd4y",
        "name": "device",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("vgofdzd8llray67");

  return dao.deleteCollection(collection);
})
