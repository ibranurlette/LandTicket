import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Dropdown } from "react-bootstrap";
import profile from "../img/user2.png";
import { Link } from "react-router-dom";
// import {login} from '../client/_action/auth';
import { register } from "../client/_action/auth_register";
import { getUsers } from "../client/_action/user";
import { connect } from "react-redux";
import { TiTicket } from "react-icons/ti";
import { IoMdLogOut } from "react-icons/io";
// component Header untuk menampikan halaman header di langi page
class Header extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { data } = this.props.user;
    const handleLogout = () => {
      localStorage.clear();
      window.location.reload();
    };
    return (
      <Fragment>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Dropdown>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                <div id="profile">
                  {data.name} &nbsp;&nbsp;&nbsp;
                  <img alt="foto" src={profile} style={{ width: "40px" }} />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Link to="/ticket">
                  <div>
                    <TiTicket id="dropdownTiketSaya" /> Tiket Saya{" "}
                  </div>
                </Link>
                <div onClick={handleLogout} id="dropdownLogoutContainer">
                  <IoMdLogOut id="dropdownLogout" />
                  Logout
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Text>
        </Navbar.Collapse>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    register: (data) => dispatch(register(data)),
    getUsers: () => dispatch(getUsers()),
  };
};

// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
