var React = require("react");
var ReactBootstrap = require('react-bootstrap')
var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;

const StatusDisplay = React.createClass({
  getInitialState() {
    return {
      showModal: false,
      modalHeader: "",
      modalBody: ""
     };
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.showModal,
      modalHeader: nextProps.modalHeader,
      modalBody: nextProps.modalBody
    })
  },


  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {

    return (
      <div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.modalHeader}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.modalBody}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default StatusDisplay
