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
        <h3 className="panel-title text-center">Query</h3>
      </div>
      <div className="panel-body text-center">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h4 className="">
              <strong>Location</strong>
            </h4>
            <div className = "col-md-8 col-md-offset-2">
              <input

                type="text"
                value={this.state.searchTerm}
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />

            </div>

            <br />
            <div className= "row">
              <div className = "col-md-4 col-md-offset-2">
                <DatePicker id="startDatePicker" value={this.state.fromDate} onChange={this.handleFromDateChange} />
              </div>
              <div className = "col-md-4">
                <DatePicker id="toDatePicker" value={this.state.toDate} onChange={this.handleToDateChange} />
              </div>
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
