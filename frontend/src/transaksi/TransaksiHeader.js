import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Icon from '../img/kereta2.jpg';
import profile from '../img/user2.png';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { TiTicket } from 'react-icons/ti';
import { IoMdLogOut } from 'react-icons/io';
// import {login} from '../client/_action/auth';
// import {register} from '../client/_action/auth_register';
import {connect} from 'react-redux';
import {getUsers} from '../client/_action/user';
// component Header untuk menampikan halaman header di langi page
class Header extends Component {
   componentDidMount(){
    this.props.getUsers();
  }
  render() {
    const {data} = this.props.user;
    console.log(data, "ini datanya")
     // const {data} = this.props.auth
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload()
      }
    return (
      <Fragment>
        <Navbar className="header">
          <Navbar.Brand href="#home" className="mt-3 ml-3">
            <p className="LandTick">LandTick<img id="gambar" alt="ibra nurlette" src={Icon} /></p>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className = "justify-content-end" >
            <Navbar.Text >
            <Dropdown >
            <Dropdown.Toggle variant = "none" id = "dropdown-basic" >
            <p id = "profile" > {data.name} &nbsp;&nbsp;&nbsp;<img alt="foto" src = {profile} id="foto"/></p>
            </Dropdown.Toggle>
            <Dropdown.Menu >
            <Link to = "/admin" >
            <p> <TiTicket id="dropdown"/> tambah ticket </p>
            </Link>
             <Link to = "/" >
            <div onClick={handleLogout}><IoMdLogOut id="dropdown_logout" />logout </div>
            </Link>
            </Dropdown.Menu>
            </Dropdown>
            </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
      </Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    // auth: state.auth,
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // login: (data) => dispatch(login(data)),
    // register: (data) => dispatch(register(data)),
    getUsers: () => dispatch(getUsers())
  }
}

// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);