// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";
import moment from "moment";

// Geocoder API
const APIKey = "9e38d3001eee43ba8a1d2a51ab80a59a";

// Helper Functions (in this case the only one is runQuery)
const helpers = {

  runQuery: (searchParams) => {

    console.log(location);
    var fromDate = moment(searchParams.fromDate).format("YYYYMMDD");

     var toDate = moment(searchParams.toDate).format("YYYYMMDD");
    // Figure out the geolocation
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    console.log(moment(searchParams.fromDate).format("YYYY/MM/DD"));

    return axios.get(queryURL,{
      params :{
        'api-key': APIKey,
        'q': searchParams.searchTerm,
        begin_date: fromDate,
        end_date : toDate
      }
    }).then((res) => {

      console.log(res);
      console.log(res["data"].response.docs);
      return(res["data"].response.docs)
    });

  },
  getSavedArticles: ()=> {
  return axios.get("/savedArticles").then(function(response) {
    if (response.data.results[0]) {
        return response.data.results[0];
      }
      // If we don't get any results, return an empty string
      return "";
    });
  }

};

// We export the helpers function (which contains getGithubInfo)
export default helpers;
