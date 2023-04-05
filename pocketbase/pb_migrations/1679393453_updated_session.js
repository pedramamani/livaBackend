migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g1wpt4yvfya5cs2")

  collection.name = "sessions"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g1wpt4yvfya5cs2")

  collection.name = "session"

  return dao.saveCollection(collection)
})
