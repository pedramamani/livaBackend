migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("eg9mlf1l2ou4txf");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "eg9mlf1l2ou4txf",
    "created": "2023-03-14 10:58:30.975Z",
    "updated": "2023-03-14 13:52:57.379Z",
    "name": "user",
    "type": "auth",
    "system": false,
    "schema": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
})
