// load mongoose
const mongoose = require("mongoose");

// set to use built in Promise for mongoose
// instead of 3rd party lib's Promise
mongoose.Promise = global.Promise;

// connect mongoose to database
mongoose.connect("mongodb://localhost:27017/TodoApp");

// create a model
// const Todo = mongoose.model("Todo", {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

const User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

// // create new Todo instance
// const newTodo = new Todo({
//   text: "Cook dinner"
// });
// const newTodo = new Todo({
//   text: "Morning challenge"
// });

// newTodo
//   .save()
//   .then(
//     doc => console.log("Saved todo", JSON.stringify(doc, undefined, 2)),
//     e => console.log("Unable to save todo")
//   );

// create new User instance
const newUser = new User({
  email: "me@me.com"
});

newUser
  .save()
  .then(
    doc => console.log("Saved user", JSON.stringify(doc, undefined, 2)),
    e => console.log("Unable to save user")
  );
