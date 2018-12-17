const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // console.log(db.col)

  // db.collection('Todos')
  //   .insertOne({
  //     text: 'Something to do',
  //     completed: false,
  //   }, (err, res) => {
  //     if (err) {
  //       return console.log('Unable to insert todo');
  //     }
  //     console.log(JSON.stringify(res.ops, undefined, 2));
  //   });

  // db.collection('Users')
  //   .insertOne(
  //     {
  //       name: 'My Name',
  //       age: 25,
  //       location: 'Planet Earth',
  //     },
  //     (err, res) => {
  //       if (err) return console.log('Unable to insert user');
  //       console.log(JSON.stringify(res.ops, undefined, 2));
  //       console.log(res.ops[0]._id.getTimestamp());
  //   })

  db.close();
});