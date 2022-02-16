const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')


if(process.env.NODE_ENV!=="production")
{
    require("dotenv").config({path :"config/keys.env"});
}


const resortController = require("./controllers/ResortController.js");
const { hydrate } = require("./models/ResortModel.js");

//APP OBJECT IS THE CEO!
const app = express();


const whitelist = ['http://localhost:3000', 'http://127.0.0.1:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(express.json());

app.use(cors(corsOptions));

//superheroes/helloworld
app.use("/resorts",resortController);


const PORT = process.env.PORT;
app.listen(PORT, async()=>{

    console.log(`Web Server is up an running on PORT : ${PORT}`);

    try
    {
        await  mongoose.connect(process.env.MONGO_DB_CONNECTION)
  
        console.log(`You are now connected to MongoDB`);
    }

    catch(err)
    {
        console.log(`Error : ${err}`)
    }
   


})