const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

const Event_Schema = new mongoose.Schema({
    Person1: {
        Name: String,
        age: Number,

    },
    adress: {
        City: String,
        State: String,

    }
})

const Event_model = mongoose.model('Concert', Event_Schema)

module.exports = Event_model