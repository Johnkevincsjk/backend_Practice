const express = require("express");
const app = express()
require('dotenv').config()
const PORT = 8000;
app.use(express.json())
app.use('/test', require("./Controller/controller"))

app.listen(PORT, () => console.log("server in live"))   