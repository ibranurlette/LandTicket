import React, {Component , Fragment}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Form, Card } from 'react-bootstrap';
import struk from '../img/struk.jpeg';
import qr_code from '../img/qr.png';
import { TiWarningOutline } from 'react-icons/ti';
// component jumbo untuk manmpikn jumbotron yang kita miliki
class Jumbo extends Component  {
  render() {
    return (
      <Fragment>
          <br/><br/><br/><br/><br/>
            <Col>
            <div id="ticket_saya">Tiket saya</div>
            <br/><br/>
            <Card id="card_jumbo_invoice">
           <Form id="form_jumbo_invoice">
          <Form.Row id="form_jumbo_invoice1">
            <Form.Group as={Col} controlId="formGridEmail" id="card_judul">
              <p id="no_tanda_invoice"><strong>no tanda pengenal</strong></p>
              <p id="no_tanda2">021 3423428457</p>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" id="time_invoice">
               <p><strong>nama pemesan</strong></p>
               <p>ibra nurlette</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" id="stasiun_invoice">
               <p><strong>no handphone</strong></p>
               <p>08742789478349</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" id="contack_invoice">
               <p><strong>email</strong></p>
               <p>ibra@gmail.com</p>
            </Form.Group>
          </Form.Row>
        </Form>
          </Card>
            </Col>
            <Card id="card_jumbo_invoice2">
            <TiWarningOutline id="warning"/>
           <p id="pembayaran">silhkan lakukan pembayaran melalui m banking, e-bangking, dan atm ke no rek yang tertera</p>
           <p id="pembayaran2">9830479205724</p>
          </Card>
          <div id="rincian_harga">Rincian Harga</div>
           <Card id="card_jumbo_invoice3">

           <Row>
            <div id="pembatas"/>
           <Col sm={8}>
             <p id="pembayaran3">agro wilis dewasa</p>
             <p id="total">total</p>

           </Col>
          <Col sm={4}>
              <p id="pembayaran4">25.000000</p>
              <p id="total2">25.000000</p>
           </Col>
           </Row>
          </Card>
          <Button type="submit" id="tombol_bayar_sekarang">
            bayar sekarang
          </Button>
          <img alt="struk" id="struk" src={struk}/>

           <p id="struk2">upload payment proof</p>
            <div>
            <Card id="card_jumbo_invoice4">
           <Row>
            <div id="pembatas"/>
           <Col sm={8}>
             <font id="pembayaran5"><strong>kereta api</strong></font>
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
               <img alt="barcode" id="barcode" src={qr_code}/>
                <p id="kode">hd027dn </p>
              <font id="kota"><strong>jakrata</strong></font>
             <p id=""><small>stasiun gambir</small></p>
             <font id=""><strong>surabaya</strong></font>
             <p id=""><small>stasiun surabaya</small></p>
           </Col>
           </Row>
          </Card>
            </div>
      </Fragment>
    );
  }
}


export default Jumbo;