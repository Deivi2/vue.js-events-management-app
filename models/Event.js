const mongoose = require('mongoose');
const moment = require('moment');

const EventSchema = mongoose.Schema({
        eventTitle: String,
        dateFrom:{
            type: String,
        },
        dateTo: String,
        location: String,
        description: String,
        author: String,
        authorId: mongoose.Schema.ObjectId
});


let Event = mongoose.model('event', EventSchema);
module.exports = Event;

