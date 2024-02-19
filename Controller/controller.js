const { app_router, push_Login_data } = require('../Router/Router')

const app_Controller = require('express').Router()


app_Controller.get('/', app_router)

app_Controller.post('/', push_Login_data)



module.exports = app_Controller