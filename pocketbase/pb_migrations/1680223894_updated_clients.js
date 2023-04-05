migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vgofdzd8llray67")

  collection.name = "client"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vgofdzd8llray67")

  collection.name = "clients"

  return dao.saveCollection(collection)
})
