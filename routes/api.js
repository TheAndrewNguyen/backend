

const express = require('express')
const router = express.Router()

const getBasicInfoController = require("../controllers/apiController")


// test api
router.get('/', (req, res)=> {
    res.send("Api Parsing data from Google Civic API"); 
})


router.get('/getBasicInfo/:address', getBasicInfoController.getBasicInfo); 


module.exports = router

