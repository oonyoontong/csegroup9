//Account schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
    username: String,
    passwordSalt: String,
    passwordHash: String,
    email: String,
    privilege: Number,
    class: String,
    coursesEnrolled: [Schema.Types.ObjectId]
	});


module.exports = mongoose.model('Account', AccountSchema);