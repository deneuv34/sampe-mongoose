var User = require('./index');
  
// create a new user called chris, 
// You can comment and uncomment this if didn't need
var chris = new User({
  name: 'Chris',
  username: 'sevilayha',
});


/**
 * Uncomment Bellow for run the code bellow
 */
// // call the built-in save method to save to the database
// chris.save(function(err) {
//   if (err) throw err;

//   console.log('User saved successfully!');
// });




/**
 * Uncomment Bellow for run the code bellow
 */

// User.find({}, function(err, users) {
//   if (err) throw err;

//   // object of all the users
//   console.log(users);
// });