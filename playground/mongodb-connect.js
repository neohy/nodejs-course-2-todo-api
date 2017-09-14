// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// var user = {name: 'andrew', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://192.168.1.109:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server' );
  }
  console.log('Connected to MongoDB server');

  // db.collection('ToDos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // db.collection('Users').insertOne({
  //   name: 'Peter',
  //   age: 23,
  //   location: 'New York'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // })
  db.close();
})
