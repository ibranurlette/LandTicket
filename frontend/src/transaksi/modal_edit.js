import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import {Link} from "react-router-dom";


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

  render() {
    return (
      <main>
      <Modal show={this.state.show} handleClose={this.hideModalLogin} id="modal_box_login1" >
{/* halaman login dengan html dan css*/}
        <form class="login-form1">
        <h1>edit form</h1>

        <div class="txtb1">
          <input type="text" placeholder="no"  />
        </div>

        <div class="txtb1">
          <input type="text" placeholder="user" />
        </div>
        <div class="txtb1">
          <input type="text" placeholder="ticket" />
        </div>
        <div class="txtb1">
          <input type="text" placeholder="bukti tranfer" />
        </div>
        <div class="txtb1">
          <input type="text" placeholder="status payment" />
        </div>
          <Link to="/home">
        <input type="submit" class="logbtn_login1" value="update"/>
          </Link>
        <input type="submit" class="logbtn_close1" value="Close"/>
      </form>
        </Modal>
       <Button onClick={this.showModalLogin} variant="warning" >
        edit</Button>
      </main>
    );
  }
}


export default Modal_login;



