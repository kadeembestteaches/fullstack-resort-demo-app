const express = require('express')
const router = express.Router();

const resortService = require("../services/ResortService.js");


router.get("/", resortService.getAllResorts);

router.post("/",resortService.createAResort);

router.get("/:id", resortService.getAResort);


module.exports = router;





