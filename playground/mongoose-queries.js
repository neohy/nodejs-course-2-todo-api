const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = '59b9eb971894f6fc0b965578';

// var id = '59ba2c5e877b22d02aba9b8dx';
//
// if (!ObjectID.isValid(id)) {
//   return console.log('ID is not valid!');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found!');
//   }
//   console.log('Todo',todo)
// });

// Todo.findById(id).then((todo) => {
//   console.log('Todo by id',todo)
// }).catch((e) => console.log(e));

////found
User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not found!');
  }
  console.log('User by id ',JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
}).catch((e) => console.log(e));
