const { Events_router, Create_data } = require("../Routers/Events_router")



const Rooms_controller = require("express").Router()


Rooms_controller.get('/', Events_router)
Rooms_controller.post('/', Create_data)


module.exports = Rooms_controller