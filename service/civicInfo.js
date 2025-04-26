

const axios = require('axios');

const fetchElectionsData = async () => {
    try {
      const response = await axios.get("https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyDS-3Zce6P4CT_crUdje86hv4N_T5XSER");
      return response.data;  // Return the response data
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching elections data');
    }
  };


  module.exports = {fetchElectionsData}