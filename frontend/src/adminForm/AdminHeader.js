import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Icon from '../img/kereta2.jpg';
import profile from '../img/user2.png';

// component Header untuk menampikan halaman header di langi page
class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar className="header">
          <Navbar.Brand href="#home" className="mt-3 ml-3">
            <p className="LandTick">LandTick<img id="gambar" alt="ibra nurlette" src={Icon} /></p>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <p id="profile">ibra&nbsp;&nbsp;&nbsp;<img alt="foto" src={profile} id="foto"/></p>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    )
  }
}
export default Header;