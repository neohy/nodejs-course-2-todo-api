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

  // //deleteMany
  // db.collection('ToDos').deleteMany({text: 'Eat lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  //deleteOne
  // db.collection('ToDos').deleteOne({text: 'Eat lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  //findOneAndDelete
  // db.collection('ToDos').findOneAndDelete({completed: false})
  //   .then((result) => {
  //     console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Peter'})
  //   .then((result) => {
  //     console.log(result);
  // });

  db.collection('Users').deleteOne({_id: new ObjectID("59b919329c525b34383b9465")})
    .then((result) => {
      console.log(result);
    });
  db.close();
})
