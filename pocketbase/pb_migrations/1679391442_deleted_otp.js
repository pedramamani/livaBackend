migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jxhesk1bip1fdrb");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "jxhesk1bip1fdrb",
    "created": "2023-02-01 19:50:29.837Z",
    "updated": "2023-03-14 13:24:56.518Z",
    "name": "otp",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wbcldpxd",
        "name": "code",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 6,
          "max": 6,
          "pattern": "^[0-9]+$"
        }
      },
      {
        "system": false,
        "id": "fdaosjni",
        "name": "expiry",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1672560000,
          "max": 2524636800
        }
      },
      {
        "system": false,
        "id": "q0mqdsjp",
        "name": "failCount",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 3
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
})
