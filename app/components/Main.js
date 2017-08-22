import React from 'react';

// Import sub-components
import helpers from './utils/helpers'
import SearchSection from './children/SearchSection'
import SearchResultSection from './children/SearchResultSection'

// Helper Function

var Main = React.createClass ({

  getInitialState: function() {
    return {
      searchTerm: "",
      startDate: "",
      endDate: "",
      results: [],
      history: []
    };
  },

  // The moment the page renders get the History
componentDidMount: function() {
  // Get the latest history.
  helpers.getSavedArticles().then(function(response) {
    console.log(response);
    if (response !== this.state.history) {
      console.log("History", response.data);
      this.setState({ history: response.data });
    }
  }.bind(this));
},
searchNYT: function(params) {
  console.log(params.formattedFromDateValue);
  console.log(params.formattedToDateValue);
  helpers.runQuery(params).then(function(data) {
    console.log(data)
    if (data !== this.state.results) {
      console.log("Search Results", data);
      this.setState({ results: data });
    }
  }.bind(this));
}
,

  render() {

    return (

      <div className="container">
        <div className="row">

            <h2 className="text-center">NYT Search!</h2>

          <div className = "row">
          <SearchSection searchNYT = {this.searchNYT}/>
          </div>


          <div className="row">
            <SearchResultSection searchResults = {this.state.results}/>
          </div>

          <div className="row">

          </div>

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
