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

  // db.collection('ToDos')
  //   // .find({completed: false})
  //   .find({_id: new ObjectID('59b9183128056640b8029e61')})
  //   .toArray()
  //   .then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log("Unable to fetch todos ", err);
  //   });

  // db.collection('ToDos')
  //   .find()
  //   .count()
  //   .then((count) => {
  //     console.log(`Todos count: ${count}`);
  //   }, (err) => {
  //     console.log("Unable to fetch todos ", err);
  //   });

  db.collection('Users')
    .find({name: 'Peter'})
    .toArray()
    .then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log("Unable to fetch todos ", err);
    });
  db.close();
})
