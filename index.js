const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/myappdatabase');
// Create Schema
const userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true }, 
});

var User = mongoose.model('User', userSchema);

module.exports = User;
