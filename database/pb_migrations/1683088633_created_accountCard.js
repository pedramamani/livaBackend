migrate((db) => {
  const collection = new Collection({
    "id": "eibmh6b2p7dwmgy",
    "created": "2023-05-03 04:37:13.429Z",
    "updated": "2023-05-03 04:37:13.429Z",
    "name": "accountCard",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pb28i5me",
        "name": "username",
        "type": "text",
        "required": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "35yysutb",
        "name": "firstName",
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
        "id": "ashpfkif",
        "name": "avatarShape",
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
        "id": "iwd0p5tx",
        "name": "avatarColor",
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
        "id": "8thna4uc",
        "name": "theme",
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
  const collection = dao.findCollectionByNameOrId("eibmh6b2p7dwmgy");

  return dao.deleteCollection(collection);
})
