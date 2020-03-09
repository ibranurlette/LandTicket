import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import {Link} from "react-router-dom";

import {connect} from 'react-redux';
import {login} from '../client/_action/auth';
import { MdErrorOutline } from 'react-icons/md';

// component modal_login untuk manampilkan modal saat tombol login di klik
class Modal_login extends Component {
   state = { show: false};

    showModalLogin = () => {
    this.setState({ show: true });
  };

  hideModalLogin = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 500)
  };
  Clicklogin = e => {
    e.preventDefault();
    const data = this.state;
    this.props.login(data)
  }
  HandleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value})
  }
  render() {
    const {authenticated, error} = this.props.auth;
    // console.log(this.props.auth)
    return (
      <main>
      <Modal show={this.state.show} handleClose={this.hideModalLogin} id="modal_box_login" >
{/* halaman login dengan html dan css*/}
        <form class="login-form">
        <h1>Login</h1>
        <h4 className="error">{error}</h4>
        <div class="txtb">
          <input type="text" placeholder="username" name="username" onChange={this.HandleChange} required controlId="validationCustom02"/>
        </div>

        <div class="txtb">
          <input type="password" placeholder="password"  name="password" onChange={this.HandleChange}/>

        </div>
          <Link to="/home">
        <input type="submit" class="logbtn_login" value="Login" onClick={this.Clicklogin}/>
          </Link>
        <input type="submit" class="logbtn_close" value="Close" onClick={this.hideModalLogin}/>
      </form>
        </Modal>
       <Button onClick={this.showModalLogin} className="tombol-login" ><p id="login">
        Login</p></Button>
      </main>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(Modal_login);



