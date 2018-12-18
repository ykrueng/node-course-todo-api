const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c182efaa194d5e961811cb8')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then(res => console.log(res));
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c1820f8a7207a08ddbf252b')
  }, {
    $set: {
      name: 'My name'
      },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then(res => console.log(res));

  db.close();
});