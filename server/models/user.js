var mongoose = require('mongoose');
var Users = mongoose.model('Users', {
  email: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  }
});

// var user1 = new Users({
//   email: 'rodtyga@gmail.com'
// });
//
// user1.save().then((doc) => {
// console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log('Unable to save User');
// });

module.exports = {Users};
