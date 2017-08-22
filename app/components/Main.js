import React from 'react';

// Import sub-components
import helpers from './utils/helpers'
import SearchSection from './children/SearchSection'

// Helper Function

var Main = React.createClass ({

  getInitialState: function() {
    return {
      searchTerm: "",
      startDate: "",
      endDate: "",
      results: "",
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

componentDidUpdate: function() {

  // Run the query for the address
  helpers.runQuery(this.state.searchTerm).then(function(data) {
    console.log(data)
    if (data !== this.state.results) {
      console.log("Address", data);
      this.setState({ results: data });
    }
  }.bind(this));

},
searchNYT: function(params) {
  console.log(params)
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
