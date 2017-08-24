// Include React
import React from 'react';
import helpers from '../utils/helpers'

// This is the History component. It will be used to show a log of  recent searches.
class SavedArticleSection extends React.Component {
  // Here we describe this component's render method
  constructor(props) {
		super(props);
    console.log('Inside Contructor');
		this.saveArticle = this.saveArticle.bind(this);
	}

  saveArticle(searchData,event) {
    console.log(event);
    console.log(searchData)
    var article = {
      title:searchData.headline.main,
      date:searchData.pub_date.substring(0, 10),
      url:searchData.web_url

    }
    helpers.saveArticle(article).then(function(data){

    })
  }

  render() {
    {console.log('Rendering Saved Article')}
    var thisObject = this;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles!</h3>
        </div>
        <div className="panel-body text-center">
            <div className="card-deck">
          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.history.map(function(history, i) {
            return (


                <div className="col-md-4" key={i}>
                  <div className="card card-inverse card-primary text-center">
                    <div className="card-block">
                      <h4 className="card-title"> This is Article # </h4>
                      <p className="card-text"> {history.title} </p>
                      <a className="btn btn-primary"  target="_blank" href={history.url}> Read Article </a>
                        <button className="btn btn-success" type="button"> Delete </button>
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
export default SavedArticleSection;
