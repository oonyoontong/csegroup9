var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LectureSchema = new Schema({
    lectureName: String,
    description: String,
    dateCreated: Date
    //How to include ppt
    //quiz
})

module.exports = mongoose.model('Lecture', LectureSchema);