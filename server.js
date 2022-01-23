const express = require('express');
const cors = require('cors');
const Generator = require('license-key-generator');
const mysql = require('mysql');
const bodyparser = require('body-parser');



const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
//add middleware
app.use(bodyparser.urlencoded({ extended: true }));



var confiq = {
    host:"localhost",
    user:"root",
    password:"",
    database:"school"
}

var connection = mysql.createConnection(confiq);
connection.connect(function (error){
    if(error){
        console.log("connection fail");
    }
    else{
        console.log("connection success");
        //insertdata();
    }
})

// function insertdata(){
//     const sqlinsert = "INSERT INTO `users_list`(`Name`, `Email`) VALUES ('iqbal','iqbal@gmail.com')";
//     connection.query(sqlinsert,function(error){
//         if(error){
//             console.log("data is not saved");
//         }
//         else{
//             console.log("data is saved");
//         }
//     })
// }

app.get("/api",cors(),(req,res)=>{
    res.json({"users":["iqbal","raju","riaz","sharif"]})
})

app.post("/insert/users",(req,res)=>{
    const Name = req.body.Name;
    const Email = req.body.Email;

    //insert query
    const sqlinsert = "INSERT INTO `users_list`(`Name`, `Email`) VALUES (?,?)";
    connection.query(sqlinsert,[Name,Email],function(error,results){
        if(error){
            console.log(error);
        }
    })
})

app.get("/insert/users/data",(req,res)=>{
    const selectquery = "SELECT `Name`, `Email` FROM `users_list`";
    connection.query(selectquery,function(error,results){
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
        }
    })
})

app.get("/key",(req,res)=>{
    res.send("hello world");
    // const options = {
    //     type: "random", // default "random"
    //     length: 16, // default 16
    //     group: 4, // default 4
    //     split: "-", // default "-"
    //     splitStatus: true // default true
    // }
    // const code = new Generator(options);
    // code.get((error,code)=>{
    //     if(error) return console.error(error)
    //     console.log("code=",code);
    // })
})

app.post("/users",(req,res)=>{
    let {email,id} = req.body
    console.log(email);
    console.log(id);
})

app.listen(port,()=>{
    console.log("Server started on port",port);
})