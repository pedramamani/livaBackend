migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("paocdiux21ajcok")

  collection.name = "records"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("paocdiux21ajcok")

  collection.name = "records_"

  return dao.saveCollection(collection)
})
