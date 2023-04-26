"use strict";

var mongoose = require("mongoose");
var dbConnect = function dbConnect() {
  var connectionParams = {
    useNewUrlParser: true
  };
  mongoose.connect(process.env.DB, connectionParams);
  mongoose.connection.on("connected", function () {
    console.log("Connect to database successfully");
  });
  mongoose.connection.on("error", function (err) {
    console.log("Error while connecting to database:" + err);
  });
  mongoose.connection.on("disconnect", function () {
    console.log("Mongodb connection disconnected");
  });
};
module.exports = dbConnect;