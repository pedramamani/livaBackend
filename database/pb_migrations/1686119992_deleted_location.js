migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mfgzbwil4ihk0be");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "mfgzbwil4ihk0be",
    "created": "2023-02-01 09:48:11.017Z",
    "updated": "2023-05-19 09:54:47.721Z",
    "name": "location",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ptuij2pc",
        "name": "ip",
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
        "id": "dibnphnu",
        "name": "city",
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
        "id": "qrcxxs11",
        "name": "region",
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
        "id": "kys4s7to",
        "name": "countryCode",
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
        "id": "icnfotdq",
        "name": "timeZone",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `_mfgzbwil4ihk0be_created_idx` ON \"location\" (`created`)",
      "CREATE UNIQUE INDEX \"idx_unique_ptuij2pc\" on \"location\" (\"ip\")"
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
