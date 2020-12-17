import React, { Component, Fragment } from "react";
import { Navbar, Dropdown } from "react-bootstrap";
import { AiOutlineTransaction } from "react-icons/ai";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Icon from "../img/kereta2.jpg";

import { getUsers } from "../client/_action/user";

// component Header untuk menampikan halaman header di langi page
class Header extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const data_user = this.props.user.data;
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
                  <p id="profile">{data_user.name}</p>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link to="/transaksi">
                    <p>
                      <AiOutlineTransaction id="dropdownTiketSaya" /> Transaksi{" "}
                    </p>
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
