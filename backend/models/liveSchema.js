
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var liveSchema = new Schmea({

    message: String,
    dateCreated: Date,
    upvote: [Schema.Types.ObjectId]


})

