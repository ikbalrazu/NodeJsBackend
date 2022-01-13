const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.get("/api",(req,res)=>{
    res.json({"users":["iqbal","raju","riaz","sharif"]})
})

app.listen(port,()=>{
    console.log("Server started on port",port);
})