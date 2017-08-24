// Include React
import React from 'react';
import helpers from '../utils/helpers'

// This is the History component. It will be used to show a log of  recent searches.
class SavedArticleSection extends React.Component {
  // Here we describe this component's render method
  constructor(props) {
		super(props);
    console.log('Inside Contructor');
		this.deleteArticle = this.deleteArticle.bind(this);
	}

  deleteArticle(articleData,props,event) {
    console.log('Inside Delete Article');
    console.log(articleData)
    helpers.deleteArticle(articleData).then(function(data){
      props.getSavedArticles();
      props.displayMessage({
        showModal:true,
        modalHeader: 'Success',
        modalBody: 'Article Deleted successfully'
      })
    })

  }

  render() {

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles!</h3>
        </div>
        <div className="panel-body text-center">
            <div className="card-deck">
          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.history.map((history, i) => {
            return (

              <div className="col-md-4" key={i}>
                  <div className="card card-inverse card-primary text-center">
                    <div className="card-block">
                      <h4 className="card-title"> This is Article # { i + 1} </h4>
                      <p className="card-text"> {history.title} </p>
                      <a className="btn btn-primary"  target="_blank" href={history.url}> Read Article </a>
                        <button className="btn btn-success" onClick = {()=>this.deleteArticle(history,this.props)} type="button"> Delete </button>
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
