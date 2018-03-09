
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var liveSchema = new Schema({

    message: String,
    dateCreated: Date,
    upvote: [Schema.Types.ObjectId]


})
