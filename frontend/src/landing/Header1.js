import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Icon from '../img/kereta2.jpg';
import Modal_register from './Modal_register';
import Modal_login from './Modal_login';

import HeaderNav from '../home/HomeHeader';

import {connect} from 'react-redux';
import {login} from '../client/_action/auth';
// component Header untuk menampikan halaman header di langi page
class Header extends Component {
  render() {
    const {isLogin} = this.props.auth
    return (
      <Fragment>
        <Navbar className="header shadow">
          <Navbar.Brand href="#home" className="mt-3 ml-3">
            <p className="LandTick">LandTick<img alt="gambar" id="gambar"  src={Icon} /></p>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            </Navbar.Text>
          </Navbar.Collapse>
          {isLogin ? (
            <HeaderNav/>
            ): (
            <Fragment>
            <Modal_register />
            <Modal_login id="modal-login" />
            </Fragment>
            )}

        </Navbar>
      </Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    login: (data) => dispatch(login(data))
  }
}
export default connect(mapStateToProps)(Header);