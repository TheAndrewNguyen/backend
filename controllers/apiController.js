

const getCivicInfo = require("../service/civicInfo")

const getBasicInfo = async(req, res) => {
    try {
        const address = req.params.address; 
        const cleanAddress = address.startsWith(":") ? address.slice(1) : address;

        const result = await getCivicInfo.fetchElectionsData(cleanAddress); 

        const {election, state} = result; 
        const stateData = state; 

        // name of election and election day info 
        const {name, electionDay} = election; 
        
                 
        const regestration_link = stateData[0].electionAdministrationBody.electionRegistrationUrl;
        console.log(regestration_link);  

        console.log(`===ELECTION QUERY FOR: ${address} ===`)
        console.log("Election name: " + name); 
        console.log("Election day: " + electionDay)
        

        res.status(200).json(
            {
                "address": address, 
                "date": electionDay, 
                "name": name, 
                "regDead": "5/5/2025", 
                "regLink": regestration_link
            }
    )
    } catch {
        res.status(500).json({"message" : "failure has occured"})
    }
}

module.exports = {getBasicInfo}