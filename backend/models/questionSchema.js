var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new Schema({
    question: String,
    questionType: Number,
    options: [{name: String}],
    answer: Schema.Types.ObjectId,
    response: [{
        student: Schema.Types.ObjectId,
        option: Schema.Types.ObjectId,
        result: Boolean
    }]

	})


module.exports = mongoose.model('Question', QuestionSchema);