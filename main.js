const express = require("express");
const app = express();

const PORT = 3000 || process.env.PORT;
app.get("/", (req, res)=>{
    res.send("hi from docker")
})

app.listen(PORT)