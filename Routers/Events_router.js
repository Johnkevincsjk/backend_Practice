const Event_model = require("../Controller/Schema")




function Events_router(req, res, next) {
    Event_model.find().then((answer) => res.json(answer)).catch((err) => console.log(err))
    return res.status(200).json({
        Message: "Addition successful",

    })
}

function Create_data(req, res, next) {
    const new_eventmodel = new Event_model(req.body);
    new_eventmodel.save().then((response) => console.log(response)).catch((e) => console.log(e))

    return res.status(200).json({
        Feedback: "data added successfully",


    })
}

module.exports = { Events_router, Create_data }
