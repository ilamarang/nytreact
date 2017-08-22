// Include React
var React = require("react");

// This is the History component. It will be used to show a log of  recent searches.
var SearchResultSection= React.createClass({
  // Here we describe this component's render method
  render: function() {

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">NYT Search Results</h3>
        </div>
        <div className="panel-body text-center">

          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.searchResults.map(function(searchData, i) {
            return (
              <p key={i}> {searchData.headline.main} </p>
            );
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = SearchResultSection;
