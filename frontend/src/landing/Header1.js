import React, { Component, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Icon from "../img/kereta2.jpg";
import ModalRegister from "./Modal_register";
import ModalLogin from "./Modal_login";
import HeaderNav from "../home/HomeHeader";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// component Header untuk menampikan halaman header di langi page
class Header extends Component {
  render() {
    const { data, isLogin } = this.props.auth;
    const token = localStorage.getItem("token");

    return (
      <Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img alt="gambar" id="gambar" src={Icon} />
            LandTick
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {data.status === "1" && isLogin ? (
                <Redirect to="transaksi" />
              ) : isLogin || token ? (
                <HeaderNav />
              ) : (
                <Fragment>
                  <ModalRegister />
                  <ModalLogin />
                </Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     login: (data) => dispatch(login(data))
//   }
// }
export default connect(mapStateToProps)(Header);
