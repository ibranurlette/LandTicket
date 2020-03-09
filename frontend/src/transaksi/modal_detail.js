import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal, Row, Col, Form, Card } from 'react-bootstrap';
import struk from '../img/struk.jpeg';
import qr_code from '../img/qr.png';
class Modal_detail extends Component {
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
            <Card id="card_jumbo_detail">
           <Row>
           <Col sm={5}>
          <font id="detail_invoice"><strong>invoice</strong></font><br/>
          <small id="detail_invoice2">kode invoice: 84h736b</small><br/><br/><br/>
             <font id="detail_kereta"><strong>kereta api</strong></font>
             <p id="tanggal">saturday 21 februari 2020</p>

             <font id="name_train"><strong>Argo wilis</strong></font>
             <p id="type_train">eksekutif</p>
             <p id="div4"/>
            <p id="div5"/>
            <p id="div6"/>
             <font id="time_travel"><strong>09:00</strong></font>
             <p id="time_travel"><small>21 feb 2020</small></p>
             <font id="time_travel"><b>09:00</b></font>
             <p id="time_travel"><small>21 feb 2020</small></p>

           </Col>
          <Col sm={4}>
              <div id="div">
               <img alt="detail_barcode" id="detail_barcode" src={qr_code}/>
                <p id="kode">hd027dn </p>
              <font id="kota"><strong>jakrata</strong></font>
             <p id=""><small>stasiun gambir</small></p>
             <font id=""><strong>surabaya</strong></font>
             <p id=""><small>stasiun surabaya</small></p>
             </div>
           </Col>

           <Col sm={3}>
               <font><img alt="struk_detail" id="struk_detail" src={struk}/></font>
               <small id="struk_detail2">upload payment proof</small>

           </Col>
           </Row>
           <hr/>
           <Form >
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail" >
              <p id="no_tanda_transaksi"><strong>no tanda pengenal</strong></p>
              <p >021 3423428457</p>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" >
               <p><strong>nama pemesan</strong></p>
               <p>ibra nurlette</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" >
               <p><strong>no handphone</strong></p>
               <p>08742789478349</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
               <p><strong>email</strong></p>
               <p>ibra@gmail.com</p>
            </Form.Group>
          </Form.Row>
        </Form>
        <hr id="hr_detail"/>
        <div id="div_detail">
        <font id="total_detail2"><strong>Total</strong></font>
        <p id="total_detail"><b>Rp. 12500000</b></p>
        </div>


        <Button onClick={this.hideModalLogin} id="botton_close_detail">
            Close
          </Button>
          </Card>
        </Modal>
       <Button onClick={this.showModalLogin} variant="info" id="tombol_detail">
        detail</Button>
      </main>
    );
  }
}


export default Modal_detail;






