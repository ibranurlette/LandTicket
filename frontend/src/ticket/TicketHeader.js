import React, { Component, Fragment } from "react";
import { Navbar, Dropdown } from "react-bootstrap";
import Icon from "../img/kereta2.jpg";
import profile from "../img/user2.png";
import { getUsers } from "../client/_action/user";
import { connect } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
// component Header untuk menampikan halaman header di langi page
class Header extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { data } = this.props.user;
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
                  <div id="profile">
                    {data.name} &nbsp;&nbsp;&nbsp;
                    <img alt="foto" src={profile} id="foto" />
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link to="/">
                    <div>
                      {" "}
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
