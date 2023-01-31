let _db;
const mongoConnect = (callback) => {
  var mongoose = require("mongoose");
  var mongoDB = `mongodb://127.0.0.1/Market`;
  mongoose.connect(mongoDB);
  _db = mongoose.connection;
  callback();
  _db.on("error", console.error.bind(console, "MongoDB connection error"));
};
const getDB = () => {
  if (_db) {
    return _db;
  } else {
    throw new Error("DB connection failed");
  }
};
exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
