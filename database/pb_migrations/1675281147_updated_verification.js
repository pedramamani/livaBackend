migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jxhesk1bip1fdrb")

  collection.name = "verifyCode"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jxhesk1bip1fdrb")

  collection.name = "verification"

  return dao.saveCollection(collection)
})
