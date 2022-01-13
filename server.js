const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.get("/api",cors(),(req,res)=>{
    res.json({"users":["iqbal","raju","riaz","sharif"]})
})

app.listen(port,()=>{
    console.log("Server started on port",port);
})