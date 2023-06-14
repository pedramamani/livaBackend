migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vgofdzd8llray67");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "vgofdzd8llray67",
    "created": "2023-02-01 09:54:47.234Z",
    "updated": "2023-05-19 09:54:47.722Z",
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
        "id": "7fwi5bmx",
        "name": "formFactor",
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
        "name": "model",
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
        "id": "zs9jpyac",
        "name": "brand",
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
    "indexes": [
      "CREATE INDEX `_vgofdzd8llray67_created_idx` ON \"client\" (`created`)",
      "CREATE UNIQUE INDEX \"idx_unique_u1gfimww\" on \"client\" (\"userAgent\")"
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
