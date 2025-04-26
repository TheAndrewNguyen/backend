

const getCivicInfo = require("../service/civicInfo")

const getBasicInfo = async(req, res) => {
    try {
        const address = req.params.address; 
        //console.log(getCivicInfo.fetchElectionsData()); 

        res.status(500).json(
            {
                "address": address, 
                "date": "5/6/2025", 
                "name": "Seattle General Election", 
                "regDead": "5/5/2025", 
                "regLink": "https://seattle.gov/"
            }
    )
    } catch {
        res.status(500).json({"message" : "failure has occured"})
    }
}

module.exports = {getBasicInfo}