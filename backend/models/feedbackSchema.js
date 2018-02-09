var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedbackSchema = new mongoose.Schema({
    student: Schema.Types.ObjectId,
    feedback: String,
    slideNumber: Number,
    lecture: Schema.Types.ObjectId
	})

module.exports = mongoose.model('Feedback', FeedbackSchema);