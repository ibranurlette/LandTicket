import React, { Component, Fragment } from "react";
import { Navbar, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

import Icon from "../img/kereta2.jpg";

import { getUsers } from "../client/_action/user";

// component Header untuk menampikan halaman header di langi page
class Header extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { data } = this.props.user;
    return (
      <Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img alt="gambar" id="gambar" src={Icon} />
            LandTick
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Text>
              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  <div id="profile">{data.name}</div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link to="/">
                    <div>
                      <AiOutlineHome id="dropdownTiketSaya" /> Home{" "}
                    </div>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
