var mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: {
    type: String,
    minlength: 5,
    required: true,
    trim: true
  },
  email:{
    type:String,
    minlength: 1,
    trim: true,
    require: true
  }
});

module.exports = {User}
