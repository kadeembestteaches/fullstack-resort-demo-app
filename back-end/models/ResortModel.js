const  mongoose = require("mongoose");
const { Schema } = mongoose;

const resortSchema = new Schema({
  
        title : {
            type:String,
            required : true     
        },
        description : {
            type:String,
            required : true
        },

        imageSrc : {
            type:String,
            required : true
        },
        price :  {
            type:String,
            required:true,
        },
        bestSeller : 
        {
            type:Boolean,
            required:true,
        }
        
},{timestamps:true});


const resortModel = mongoose.model('Resort', resortSchema);


module.exports = resortModel;