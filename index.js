const express = require("express");
const app = express()
const PORT = 4000;
const body_parser = require("body-parser")


app.use(body_parser.json())
app.use("/getrooms", require('./Controller/Rooms_controller'))

app.use('/Create', require('./Controller/Rooms_controller'))

app.listen(PORT, () => console.log("server is live"))