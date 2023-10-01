const express=require('express');
const app=express();

//load config from .env file
require("dotenv").config();
const PORT=process.env.PORT || 4000;

//connect to the database
const dbConnect=require("./config/database");
dbConnect();

//import post routes
const postRoutes=require('./routes/blogs');

//middleware to parse json request body
app.use(express.json());

//mount the todo API routes
app.use('/api/v2',postRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
})

//default route
app.get('/',(req,res)=>{
    res.send('<h1>This is m home page</h1>')
})

