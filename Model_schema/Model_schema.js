const { default: mongoose } = require("mongoose");


const user_Login_data = mongoose.Schema({
    First_Name: {
        type: String,
        required: true
    },
    Last_Name: {
        type: String,

    },
    Email_ID: {
        type: String,

    },
    Password: {
        type: String,

    }
})

module.exports = mongoose.model("sunday_data", user_Login_data);
