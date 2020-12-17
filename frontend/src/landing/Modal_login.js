import React, { Component } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../client/_action/auth";

// component modal_login untuk manampilkan modal saat tombol login di klik
class Modal_login extends Component {
  state = { show: false, validated: false };

  showModalLogin = () => {
    this.setState({ show: true });
  };

  hideModalLogin = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 500);
  };
  Handlelogin = (e) => {
    e.preventDefault();
    const data = this.state;
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    let setValidated = this.setState({ validated: true });
    this.props.login(data, setValidated);
  };
  HandleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { error } = this.props.auth;
    return (
      <main>
        <Modal show={this.state.show} onHide={this.hideModalLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Form Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              validated={this.state.validated}
              className="container mt-4 mb-4"
            >
              {error && <Alert variant="danger">{error}</Alert>}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this.HandleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Username anda belum disi
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.HandleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Password anda belum disi
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                variant="warning"
                className="mr-2"
                onClick={this.hideModalLogin}
              >
                Cancel
              </Button>
              <Link to="/home"></Link>
              <Button
                variant="success"
                type="submit"
                onClick={this.Handlelogin}
              >
                Masuk
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        <Button onClick={this.showModalLogin} variant="primary">
          Login
        </Button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal_login);
