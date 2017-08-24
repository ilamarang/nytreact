// Include React
import React from 'react';
import helpers from '../utils/helpers'

// This is the History component. It will be used to show a log of  recent searches.
class SearchResultSection extends React.Component {
  // Here we describe this component's render method
  constructor(props) {
		super(props);
    console.log('Inside Contructor');
		this.saveArticle = this.saveArticle.bind(this);
	}

  saveArticle(searchData,props,event) {

    console.log(props);

    var article = {
      title:searchData.headline.main,
      date:searchData.pub_date.substring(0, 10),
      url:searchData.web_url

    }
    helpers.saveArticle(article).then(function(data){
      props.getSavedArticles();
      props.displayMessage({showModal:true})
    })
  }

  render() {
    {console.log('Rendering now')}
    var thisObject = this;
    var props = this.props
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">NYT Search Results</h3>
        </div>
        <div className="panel-body text-center">
          <ul className="list-group col-md-8 col-md-offset-2">
          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.searchResults.map(function(searchData, i) {
            return (
              <li key={searchData._id} className="list-group-item" style={ {borderWidth: "0px"} }>
                  <div className="input-group">
                    <div type="text" className="form-control">
                      <b><a href={searchData.web_url} target="_new" style={ {color: "black"} }>{searchData.headline.main}</a></b>
                      <i> {searchData.pub_date.substring(0, 10)}</i>
                    </div>
                    <span className="input-group-btn">
                      <button className="btn btn-success" onClick = {thisObject.saveArticle.bind(thisObject,searchData,props)} type="button"  value={searchData._id}>Save</button>
                    </span>
                  </div>
                </li>
            );
          })}
          </ul>
        </div>
      </div>
    );
  }
};

// Export the component back for use in other files
export default SearchResultSection;
