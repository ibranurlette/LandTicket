import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Dropdown } from "react-bootstrap";
import Icon from "../img/kereta2.jpg";
import profile from "../img/user2.png";
import { getUsers } from "../client/_action/user";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineTransaction } from "react-icons/ai";
// component Header untuk menampikan halaman header di langi page
class Header extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const data_user = this.props.user.data;
    return (
      <Fragment>
        <Navbar className="header">
          <Navbar.Brand href="#home" className="mt-3 ml-3">
            <p className="LandTick">
              LandTick
              <img id="gambar" alt="ibra nurlette" src={Icon} />
            </p>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  <p id="profile">
                    {data_user.name} &nbsp;&nbsp;&nbsp;
                    <img alt="foto" src={profile} id="foto" />
                  </p>
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
