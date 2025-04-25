

const express = require('express')
const router = express.Router()

// test api
router.get('/', (req, res)=> {
    res.send("Api Parsing data from Google Civic API"); 
})

// get the location 
router.get('/location', (req, res)=>{
    res.send("Zipcode / Location Information")
})

// get election name
router.get('/electionName', (req, res)=>{
    res.send("Election Name: ")
})

// get regestration Deadline 
router.get('/regDeadline', (req, res)=>{
    res.send("regDeadline")
})

// get regestration link 
router.get(('/regLink'), (req, res)=>{
    res.send("regLink"); 
})



module.exports = router

