import React, { Component, Fragment } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { deletePayment } from "../client/_action/hapus_payment";

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  openModal = () => {
    this.setState({
      login: true,
    });
  };
  closeModal = () => {
    this.setState({
      login: false,
    });
  };
  handleDelete = (e) => {
    e.preventDefault();
    const id = this.props.data.id;
    this.props.deletePayment(id);
    window.location.reload(false);
  };
  render() {
    const data = this.props.data;
    return (
      <Fragment>
        <Modal show={this.state.login} onHide={this.closeModal}>
          <Modal.Body>
            <h5>
              <b>name</b> {data?.user?.name}
            </h5>
            <h4>
              Yakin Hapus Data{" "}
              <b style={{ color: "red" }}>{data?.user?.username}</b> ?
            </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button size="sm" variant="danger" onClick={this.handleDelete}>
              Ya
            </Button>
            <Button size="sm" variant="info" onClick={this.closeModal}>
              Tidak
            </Button>
          </Modal.Footer>
        </Modal>
        <Button variant="danger" onClick={this.openModal}>
          Hapus
        </Button>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    deletepayment: state.Hapus_payment,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePayment: (id) => dispatch(deletePayment(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Delete);
// export default Delete;
