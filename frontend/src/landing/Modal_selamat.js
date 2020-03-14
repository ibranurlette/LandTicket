import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal, Row, Col, Form, Card } from 'react-bootstrap';
import struk from '../img/struk.jpeg';
import qr_code from '../img/qr.png';
import { connect } from 'react-redux';
import { getUsers } from '../client/_action/user';
import { Beli_ticket } from "../client/_action/beli_ticket";
import { TiShoppingCart } from 'react-icons/ti';
import {
  Link
} from "react-router-dom";
class Modal_selamat extends Component {

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
      <Modal show={this.state.show} handleClose={this.hideModalLogin} id="modal_detail" size="lg">
            <Card id="card_jumbo_beli">
           <Row>
           <Col sm={6}>
          <font id="detail_beli"><strong>Booking Ticket</strong></font><br/>
             <font id="detail_kereta"><strong>kereta api</strong></font>
             <p id="tanggal"></p>
           </Col>
           </Row>

           <hr/>
           <Form >
          </Form>
        <Button onClick={this.hideModalLogin} id="botton_close_beli">
            Close
          </Button>
          </Card>
        </Modal>
        <p onClick={this.showModalLogin}><p id="shoping"/>
        </p>
      </main>
    );
  }
}

export default Modal_selamat;






