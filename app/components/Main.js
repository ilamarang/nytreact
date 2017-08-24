import React from 'react';

// Import sub-components
import helpers from './utils/helpers'
import SearchSection from './children/SearchSection'
import SearchResultSection from './children/SearchResultSection'
import StatusDisplay from "./children/StatusDisplay";
import SavedArticleSection from './children/SavedArticleSection'

// Helper Function

var Main = React.createClass ({

  getInitialState: function() {
    return {
      searchTerm: "",
      startDate: "",
      endDate: "",
      results: [],
      history: [],
      showModal:false
    };
  },
searchNYT: function(params) {
  console.log(params.formattedFromDateValue);
  console.log(params.formattedToDateValue);
  helpers.runQuery(params).then(function(data) {
    console.log(data)
    if (data !== this.state.results) {
      console.log("Search Results", data);
      this.setState({ results: data
      });
    }
  }.bind(this));
},
displayMessage: function(params) {
this.setState({showModal:params.showModal,
modalBody:params.modalBody,
modalHeader:params.modalHeader})

},
getSavedArticles: function() {
  helpers.getSavedArticles().then(function(response) {
    console.log(response);
    if (response !== this.state.history) {
      console.log("History", response.data);
      this.setState({ history: response.data });
    }
  }.bind(this));
},

// The moment the page renders get the History
componentDidMount: function() {
// Get the latest history.
this.getSavedArticles();
}
,

  render() {

    return (

      <div className="container">
        <div className="row">

            <h2 className="text-center" id="NYTheader">NYT Search!</h2>

          <div className = "row">
          <SearchSection searchNYT = {this.searchNYT}/>
          </div>


          <div className="row">
            <SearchResultSection searchResults = {this.state.results} displayMessage = {this.displayMessage} getSavedArticles = {this.getSavedArticles}/>
          </div>

          <div className="row">
            <SavedArticleSection history = {this.state.history} getSavedArticles = {this.getSavedArticles} displayMessage = {this.displayMessage}/>
          </div>
          <div className="row">
            <StatusDisplay showModal = {this.state.showModal} modalHeader = {this.state.modalHeader} modalBody = {this.state.modalBody}/>
          </div>

        </div>

      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Main;
