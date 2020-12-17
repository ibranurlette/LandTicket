import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";

import { updatePayment } from "../client/_action/update_payment";

// component modal_login untuk manampilkan modal saat tombol login di klik
class Modal_edit extends Component {
  state = { show: false, status: this.props.data.status };

  showModalLogin = () => {
    this.setState({ show: true });
  };

  hideModalLogin = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 500);
  };
  HandleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({ status: value });
    console.log(value, "value");
  };
  handleUpdate = (e) => {
    e.preventDefault();
    const id = this.props.data.id;
    // const qty= "100";
    // const Total_price= "45000";
    const status = this.state.status;
    // const attachment= "19.png";
    const data2 = {
      status,
    };
    this.props.updatePayment(id, data2);
    window.location.reload(false);
  };

  render() {
    const data = this.props.data;
    return (
      <main>
        <Modal
          show={this.state.show}
          onHide={this.hideModalLogin}
          id="modal_box_login1"
        >
          {/* halaman login dengan html dan css*/}
          <form className="login-form1">
            <h1>edit form</h1>

            <div className="txtb1">
              <input
                type="text"
                placeholder="user"
                value={data?.user?.name}
                onChange={this.HandleChange}
              />
            </div>
            <div className="txtb1">
              <input
                type="text"
                placeholder="ticket"
                value={data?.train?.startStation}
                onChange={this.HandleChange}
              />
            </div>
            <div className="txtb1">
              <input
                type="text"
                placeholder="bukti tranfer"
                value="1.jpg"
                onChange={this.HandleChange}
              />
            </div>
            <div className="txtb1">
              <input
                type="text"
                placeholder="status payment"
                value={this.state.status}
                name="status"
                onChange={this.HandleChange}
              />
            </div>
            <input
              type="submit"
              className="logbtn_login1"
              value="update"
              onClick={(e) => this.handleUpdate(e)}
            />
            <input
              type="submit"
              className="logbtn_close1"
              value="Close"
              onClick={this.hideModalLogin}
            />
          </form>
        </Modal>
        <Button onClick={this.showModalLogin} variant="warning">
          Edit
        </Button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    update_payment: state.update_payment,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePayment: (id, data) => dispatch(updatePayment(id, data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal_edit);
// export default Modal_edit;
