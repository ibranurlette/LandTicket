import React, { Component } from "react";
import { Button, Modal, Alert, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { register } from "../client/_action/auth_register";

// component modal_register untuk manampilkan modal saat tombol register di klik
class Modal_register extends Component {
  state = { show: false, validated: false };

  showModalRegister = () => {
    this.setState({ show: true });
  };

  hideModalRegister = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 100);
  };
  handle_register = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    let setValidated = this.setState({ validated: true });

    const data = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      phone: this.state.phone,
      addres: this.state.addres,
    };
    this.props.register(data, setValidated);
  };
  HandleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { error } = this.props.auth;
    return (
      <main>
        <Modal show={this.state.show} onHide={this.hideModalRegister}>
          <Modal.Header closeButton>
            <Modal.Title>Form Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              validated={this.state.validated}
              className="container mt-4 mb-4"
            >
              {error && <Alert variant="danger">{error}</Alert>}
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={this.HandleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Nama anda belum disi
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Username</Form.Label>
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
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={this.HandleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Email anda belum disi
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
              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" required>
                  <option name="gender" onChange={this.HandleChange}>
                    male
                  </option>
                  <option name="gender" onChange={this.HandleChange}>
                    female
                  </option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Gender anda belum disi
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  onChange={this.HandleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Phone anda belum disi
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Alamat</Form.Label>
                <Form.Control
                  type="text"
                  name="addres"
                  placeholder="Addres"
                  onChange={this.HandleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Alamat anda belum disi
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
                onClick={this.handle_register}
              >
                Register
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        <Button
          variant="secondary"
          className="mr-2 "
          onClick={this.showModalRegister}
        >
          Sign up
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
    register: (data) => dispatch(register(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal_register);

// export default Modal_register;
