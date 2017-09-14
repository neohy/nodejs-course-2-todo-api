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

  // findOneAndUpdate
  // db.collection('ToDos').findOneAndUpdate({
  //   _id: new ObjectID("59b9d6a6538cd3f98b0b42e5")
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID("59b9c6beb7ff4f146030f3fc")
  // },{
  //   $set: {
  //     name: 'Albert'
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID("59b9c6beb7ff4f146030f3fc")
  // },{
  //   $inc: {
  //     age: 1
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59b9c6beb7ff4f146030f3fc")
  },{
    $set: {
      name: 'Andrew again'
    },
    $inc: {
      age: 1
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  db.close();
})
