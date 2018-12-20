const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// Todo.remove({}) => removing all
// Todo

// Todo.remove({}).then(res => console.log(res));

// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove(id)

Todo.findByIdAndRemove('5c1be040a194d5e961814cae').then(todo => {
  console.log(todo);
})