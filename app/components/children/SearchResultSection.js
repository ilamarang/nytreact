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
      props.displayMessage({
        showModal:true,
        modalHeader: 'Success',
        modalBody: 'Article Saved successfully'
      })
    })
  }

  render() {

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">NYT Search Results</h3>
        </div>
        <div className="panel-body text-center">
          <div className="card-deck">
          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.searchResults.map((searchData, i)=> {
            return (

                <div className="col-md-4" key={searchData._id}>
                  <div className="card card-inverse card-primary text-center">
                    <div className="card-block">
                      <h4 className="card-title"> This is Article # { i + 1}</h4>
                      <p className="card-text"> {searchData.headline.main} </p>
                      <a className="btn btn-primary"  target="_blank" href={searchData.web_url}> Read Article </a>
                        <button className="btn btn-success" onClick = {() => this.saveArticle(searchData,this.props)} type="button"  value={searchData._id}>Save</button>
                    </div>
                  </div>
                </div>

            );
          })}
        </div>
        </div>
      </div>
    );
  }
};

// Export the component back for use in other files
export default SearchResultSection;
