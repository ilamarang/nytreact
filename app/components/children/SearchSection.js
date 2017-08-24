// Include React
var React = require("react");
var DatePicker = require("react-bootstrap-date-picker");

var SearchSection = React.createClass({
  getInitialState: function(){
   var fromDate = new Date().toISOString();
   var toDate = new Date().toISOString();
   return {
     searchTerm: "",
     fromDate: "",
     toDate: ""
   }
 },
 handleFromDateChange: function(value, formattedValue) {
   console.log('Formatted Value:' +   formattedValue);

   this.setState({
     fromDate: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
     formattedFromDateValue: formattedValue // Formatted String, ex: "11/19/2016"
   });

 },
 handleToDateChange: function(value, formattedValue) {
   console.log('Formatted Value:' +   formattedValue);

   this.setState({
     toDate: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
     formattedToDateValue: formattedValue // Formatted String, ex: "11/19/2016"
   });

 },
 handleOnClick: function(event) {
   console.log('Handle On Click');

   console.log(this.state);
   this.props.searchNYT(this.state)

 },
 handleChange: function(event) {
    this.setState({searchTerm: event.target.value});
  }
 ,


  render: function() {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title text-center">NYT Search Criteria Panel</h3>
      </div>
      <div className="panel-body text-center">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className = "col-md-4">
              <input

                type="text"
                value={this.state.searchTerm}
                className="form-control text-center"
                placeholder= "Search Keywords"
                id="term"
                onChange={this.handleChange}
                required
              />

            </div>
            </div>


            <div className="form-group">
              <div className = "col-md-2">
                <DatePicker id="startDatePicker" value={this.state.fromDate} onChange={this.handleFromDateChange} />


                </div>

              <div className = "col-md-2">
                <DatePicker id="toDatePicker" value={this.state.toDate} onChange={this.handleToDateChange} />


            </div>

            <input
              className="btn btn-primary"
              type="button"
              onClick={this.handleOnClick}
              value = "SUBMIT"
            />

              </div>

        </form>
      </div>
    </div>
  );
}

})

// Export the component back for use in other files
module.exports = SearchSection;
