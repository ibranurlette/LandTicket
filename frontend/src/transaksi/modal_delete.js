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
    console.log("DATA_ITEM_DELETE", data);
    return (
      <Fragment>
        <Modal show={this.state.login} onHide={this.closeModal}>
          <Modal.Body>
            <h5>
              <b>Pemesan Dengan Nama : {data.user.name}</b>
            </h5>
            <h4>Yakin Ingin Hapus Data Ini ?</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button size="sm" variant="primary" onClick={this.handleDelete}>
              Iya
            </Button>
            <Button size="sm" variant="warning" onClick={this.closeModal}>
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
