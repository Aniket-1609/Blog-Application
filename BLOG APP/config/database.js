const mongoose=require('mongoose');

//install npm i dotenv 
//to load the .env data in process object
require('dotenv').config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log("connection success")})
    .catch((error)=>{
        
        console.error(error.message);
        process.exit(1);
    });
}

module.exports=dbConnect;