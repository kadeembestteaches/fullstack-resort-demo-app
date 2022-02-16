const resortModel = require("../models/ResortModel.js");


exports.getAllResorts = async (req,res)=>{



    //filter data 

    const queryStringObj = {};

    if(req.query.bestSeller)
    {
        queryStringObj.bestSeller = req.query.bestSeller
    }

    

    try
    {
        const resorts = await resortModel.find(queryStringObj) //async operaiton (non-blocking)
     
        res.json({
            message : "A List of Resorts",
            results : resorts,
            totalResorts : resorts.length
        })
        
    }
    catch(err)
    {
        res.status(500).json({
            message :err
        })
    }


     

};

exports.getAResort =  (req,res)=>{


    resortModel.findById(req.params.id)
    .then(resort=>{

       
        if(resort)
        {
            res.json({

                message : `resort with the id ${req.params.id}`,
                result : resort
            })
        }

        else
        {

            res.status(404).json({
                message : `There is no resorts in our database with the id ${req.params.id}`
            })
        }


    })

    .catch(err=>{


        if(err.name==="CastError" && err.kind==="ObjectId")
        {

            res.status(404).json({
                message : `There is no resorts in our database with the id ${req.params.id}`
            })
        }

        else
        {
            res.status(500).json({
                message :err
            })
        }


 
    })

};


exports.createAResort = async(req,res)=>{


    //validation code 
    const resort = new resortModel(req.body);
    resort.save()
    .then(newResort=>{

        res.status(201).json({
            message :"The superHero Was successfully created and stored in the databaase",
            result : newResort
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message :err
        })
    })

};


