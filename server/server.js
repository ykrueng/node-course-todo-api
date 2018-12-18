// load mongoose
const mongoose = require("mongoose");

// set to use built in Promise for mongoose
// instead of 3rd party lib's Promise
mongoose.Promise = global.Promise;

// connect mongoose to database
mongoose.connect("mongodb://localhost:27017/TodoApp");

// create a model
const Todo = mongoose.model("Todo", {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// create new Todo instance
// const newTodo = new Todo({
//   text: "Cook dinner"
// });

const newTodo = new Todo({
  text: "Morning walk",
  completed: true,
  completedAt: Date.now()
});

newTodo
  .save()
  .then(
    doc => console.log("Saved todo", JSON.stringify(doc, undefined, 2)),
    e => console.log("Unable to save todo")
  );
