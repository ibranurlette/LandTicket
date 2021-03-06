import React, { Component, Fragment } from "react";
import { Navbar } from "react-bootstrap";
import { NavDropdown, Nav } from "react-bootstrap";
import { TiTicket } from "react-icons/ti";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Icon from "../img/kereta2.jpg";

import { getUsers } from "../client/_action/user";
// import {login} from '../client/_action/auth';
// import {register} from '../client/_action/auth_register';

// component Header untuk menampikan halaman header di langi page
class Header extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { data } = this.props.user;
    // const {data} = this.props.auth
    const handleLogout = () => {
      localStorage.clear();
      window.location.reload();
    };
    return (
      <Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            LandTick
            <img id="gambar" alt="ibra nurlette" src={Icon} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title={data.name} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/admin">
                    <TiTicket id="dropdownTiketSaya" /> Tambah Ticket
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <div onClick={handleLogout}>
                    <Link to="/">
                      <IoMdLogOut id="dropdownLogout" />
                      Logout
                    </Link>
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // auth: state.auth,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // login: (data) => dispatch(login(data)),
    // register: (data) => dispatch(register(data)),
    getUsers: () => dispatch(getUsers()),
  };
};

// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
