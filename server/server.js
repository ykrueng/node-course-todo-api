require("./config/config");
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");
const _ = require("lodash");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const app = express();
const port = process.env.PORT;

// middleware
app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then(doc => res.send(doc), e => res.status(400).send(e));
});

app.get("/todos", (req, res) => {
  Todo.find().then(todos => res.send({ todos }), e => res.status(400).send(e));
});

app.get(`/todos/:id`, (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) return res.status(404).send();

  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      return res.send({ todo });
    })
    .catch(e => res.status(400).send());
});

app.delete(`/todos/:id`, (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) return res.status(404).send();

  Todo.findByIdAndRemove(id)
    .then(todo => {
      return !todo ? res.status(404).send() : res.send({ todo });
    })
    .catch(e => res.status(400).send());
});

app.patch("/todos/:id", (req, res) => {
  const id = req.params.id;
  const body = _.pick(req.body, ["text", "completed"]);

  if (!ObjectID.isValid(id)) return res.status(404).send();

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completedAt = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(e => res.status(400).send());
});

// POST /users
app.post("/users", (req, res) => {
  const body = _.pick(req.body, ["email", "password"]);
  const user = new User(body);

  user
    .save()
    .then(() => {
      return user.generateAuthToken();
      // res.send(user);
    })
    .then(token => {
      console.log(token);
      res.header('x-auth', token).send(user)
    })
    .catch(err => res.status(400).send(err));
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app };
