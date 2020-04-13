import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { Link} from "react-router-dom";
import { connect } from 'react-redux';
import { register } from '../client/_action/auth_register';


// component modal_register untuk manampilkan modal saat tombol register di klik
class Modal_register extends Component {
  state = { show: false };

  showModalRegister = () => {
    this.setState({ show: true });
  };

  hideModalRegister = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 100)
  };
  handle_register = e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      phone: this.state.phone,
      addres: this.state.addres,
    };
    this.props.register(data)
  }
   onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
     const {error} = this.props.auth;
    return (
      <main>
          <Modal show={this.state.show} onHide={this.hideModalRegister} className="modal_box_regist">
        <form className="login-form_register" autoComplete="of">
        <h1 id="judul_register">Register</h1>
        <h4 className="error">{error}</h4>
        <div className="txtb">
          <input type="text" placeholder="name" name="name" onChange={this.onChange} autoComplete="of" required/>
        </div>

        <div className="txtb">
          <input type="text"  placeholder="username" name="username" onChange={this.onChange} autoComplete="of" required/>
        </div>
        <div className="txtb">
          <input type="email"  placeholder="email" name="email" onChange={this.onChange} required/>
        </div>
        <div className="txtb">
          <input type="password"  placeholder="password" onChange={this.onChange} name="password" required/>
        </div>
         <div className="txtb">
          <select name="gender" onChange={this.onChange}>
            <option >your gender</option>
            <option >male</option>
            <option >female</option>
          </select>
        </div>
        <div className="txtb">
          <input type="text"  placeholder="phone" name="phone" onChange={this.onChange}/>
        </div>
        <div className="txtb">
          <textarea placeholder="addres" name="addres" onChange={this.onChange} required></textarea>
        </div>
        <Link to="/home">
        <input type="submit" className="logbtn_login" value="Register" onClick={this.handle_register}/>
        </Link>
        <input type="submit" className="logbtn_close" value="Close" onClick={this.hideModalRegister}/>
      </form>

      </Modal>


          <div className="right">
        { /* <p id="para">have account or not ?</p> */ }
              <Button variant="secondary" onClick={this.showModalRegister} className="mt-3 mr-3 tombol_register "><p id="sign_up">Sign up</p></Button>
          </div>
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
    register: (data) => dispatch(register(data))
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal_register);

// export default Modal_register;