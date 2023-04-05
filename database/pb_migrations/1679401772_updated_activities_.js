migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("86i4o689d0raqmv")

  collection.name = "activities"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("86i4o689d0raqmv")

  collection.name = "activities_"

  return dao.saveCollection(collection)
})
