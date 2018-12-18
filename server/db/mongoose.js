// load mongoose
const mongoose = require("mongoose");

// set to use built in Promise for mongoose
// instead of 3rd party lib's Promise
mongoose.Promise = global.Promise;

// connect mongoose to database
mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports = {
  mongoose,
}