migrate((db) => {
  const collection = new Collection({
    "id": "paocdiux21ajcok",
    "created": "2023-02-01 19:41:09.197Z",
    "updated": "2023-02-01 19:41:09.197Z",
    "name": "record",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wi7eqkdp",
        "name": "activity",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "86i4o689d0raqmv",
          "cascadeDelete": true,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "f8caqxmx",
        "name": "start",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1672560000,
          "max": 2524608000
        }
      },
      {
        "system": false,
        "id": "btf2exjv",
        "name": "end",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1672560000,
          "max": 2524608000
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
  const collection = dao.findCollectionByNameOrId("paocdiux21ajcok");

  return dao.deleteCollection(collection);
})
