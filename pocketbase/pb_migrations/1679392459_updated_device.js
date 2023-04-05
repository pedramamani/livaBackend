migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  collection.name = "devices"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6696je6fjdyfohr")

  collection.name = "device"

  return dao.saveCollection(collection)
})
