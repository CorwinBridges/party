const { MongoClient } = require("mongodb")

let dbConnection
module.exports = {
  connnectToDb: (cb) => {
    MongoClient.connect("mongodb://localhost:27017/partyinabox")
      .then((client) => {
        dbConnection = client.db()
        return cb()
      })
      .catch((err) => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection,
}
