const express = require('express');
const router  = require('../router/router');

const app = express();

// user middleware
app.use(express.json()); //req.body.firstname would get you a first name
app.use(express.urlencoded({ extended: true}));

//use middle ware for cross origin resource sharing "CORS"
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow_Header","Origin, X-Requested-With, Content-Type, Accept, Authorization");

    // this shows what methds are allowed
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods","POST, GET , PUT, PATCH, DELETE")
    }
    next();
});

//default actuator
app.get("/",(req,res,next)=> {
    res.status(200).json({message:"Service is up"});
});
// "/example" and above from get the "/" cant be the same
app.use('/example', router);

// use middleware to handle error or bad paths
app.use((req,res,next)=>{
    const error = new Error("URL not found");
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
        },
    });
});
module.exports = app;