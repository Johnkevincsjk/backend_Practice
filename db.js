// This is created for test purposes by mentor

const mongoose = require('mongoose');
// mongoose.connect()
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/userdata');
        console.log('connected successfully');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;