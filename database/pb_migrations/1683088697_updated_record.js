migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("paocdiux21ajcok")

  collection.name = "recording"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("paocdiux21ajcok")

  collection.name = "record"

  return dao.saveCollection(collection)
})
