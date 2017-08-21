import React from 'react';

// Import sub-components
import helpers from './utils/helpers'

// Helper Function


var Main = React.createClass ({

  getInitialState: function() {
    return {
      searchTerm: "",
      startYear: "",
      endYear: "",
      results: "",
      history: []
    };
  },

  // The moment the page renders get the History
componentDidMount: function() {
  // Get the latest history.
   /* helpers.getHistory().then(function(response) {
    console.log(response);
    if (response !== this.state.history) {
      console.log("History", response.data);
      this.setState({ history: response.data });
    }
  }.bind(this)); */
  helpers.runQuery(this.state.searchTerm).then(function(data) {
    console.log(data)
    if (data !== this.state.results) {
      console.log("Address", data);
      this.setState({ results: data });
    }
  }.bind(this));
},

componentDidUpdate: function() {

  // Run the query for the address

},

  render() {

    return (

      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">NYT Search!</h2>
            <p className="text-center">
              <em>Enter a landmark to search for its exact address (ex: "Eiffel Tower").</em>
            </p>
          </div>
          <div className = "row">

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

// Export the componen back for use in other files
export default Main;
