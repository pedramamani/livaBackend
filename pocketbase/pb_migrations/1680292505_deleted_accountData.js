migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xzvvjkso4mzdcpy");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "xzvvjkso4mzdcpy",
    "created": "2023-02-01 18:54:42.834Z",
    "updated": "2023-03-31 00:52:57.396Z",
    "name": "accountData",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gsow2rst",
        "name": "pin",
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
        "id": "oepcnqye",
        "name": "activeDevice",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "6696je6fjdyfohr",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "jp7lfwpt",
        "name": "rootActivity",
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
        "id": "uvhj68yd",
        "name": "activeRecord",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "paocdiux21ajcok",
          "cascadeDelete": true,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "vlntqox5",
        "name": "records",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "paocdiux21ajcok",
          "cascadeDelete": true,
          "maxSelect": null,
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
})
