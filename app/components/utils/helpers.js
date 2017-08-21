// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Geocoder API
const APIKey = "9e38d3001eee43ba8a1d2a51ab80a59a";

// Helper Functions (in this case the only one is runQuery)
const helpers = {

  runQuery: (location) => {

    console.log(location);

    // Figure out the geolocation
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    return axios.get(queryURL,{
      params :{
        'api-key': APIKey,
        'q': 'Eclipse'
      }
    }).then((res) => {

      console.log(res);
      console.log(res["data"].response);

    });

  }
};

// We export the helpers function (which contains getGithubInfo)
export default helpers;
