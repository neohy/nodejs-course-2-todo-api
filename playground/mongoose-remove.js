const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Delete everything
// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
Todo.findOneAndRemove({_id: '59ba4110ba258a2c8495133d'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('59ba4110ba258a2c8495133d').then((todo) => {
  console.log(todo);
})
