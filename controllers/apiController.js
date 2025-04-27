

const getCivicInfo = require("../service/civicInfo")

const getBasicInfo = async(req, res) => {
    try {
        const address = req.params.address; 
        const cleanAddress = address.startsWith(":") ? address.slice(1) : address;

        const result = await getCivicInfo.fetchElectionsData(cleanAddress); 

        const {election, state, pollingLocations} = result; 

        // state data 
        const stateData = state; 

        // name of election and election day info 
        const {name, electionDay} = election; 
        
                 
        const adminBody = stateData[0].electionAdministrationBody;
        const electionInfo = adminBody.electionInfoUrl; 
        const regestration_link = adminBody.electionRegistrationUrl; 

        const pollingHours = pollingLocations[0].pollingHours; 
        
        console.log(regestration_link);  

        console.log(`===ELECTION QUERY FOR: ${address} ===`)
        console.log("Election name: " + name); 
        console.log("Election day: " + electionDay)
        console.log("Election Info: " + electionInfo)
        console.log("Regestration Link " + regestration_link); 
        

        res.status(200).json(
            {
                "address": address, 
                "date": electionDay, 
                "name": name, 
                "electionInfo": electionInfo, 
                "regLink": regestration_link,
                "pollingHours": pollingHours
            }
    )
    } catch {
        res.status(500).json({"message" : "failure has occured"})
    }
}

module.exports = {getBasicInfo}