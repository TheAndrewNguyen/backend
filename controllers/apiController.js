

const getCivicInfo = require("../service/civicInfo")

const getBasicInfo = async(req, res) => {
    try {
        const address = req.params.address; 
        const cleanAddress = address.startsWith(":") ? address.slice(1) : address;

        const result = await getCivicInfo.fetchElectionsData(cleanAddress); 

        const {election} = result; 
        
        const {name, electionDay} = election; 
        console.log(name); 
        console.log(electionDay)

        res.status(200).json(
            {
                "address": address, 
                "date": electionDay, 
                "name": name, 
                "regDead": "5/5/2025", 
                "regLink": "https://seattle.gov/"
            }
    )
    } catch {
        res.status(500).json({"message" : "failure has occured"})
    }
}

module.exports = {getBasicInfo}