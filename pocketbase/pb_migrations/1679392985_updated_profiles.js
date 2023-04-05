migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  collection.name = "accounts"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r8528b8o0i96nnh")

  collection.name = "profiles"

  return dao.saveCollection(collection)
})
