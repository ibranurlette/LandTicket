import React, {Component , Fragment}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Button, Col, Form, Card } from 'react-bootstrap';

// component jumbo untuk manmpikn jumbotron yang kita miliki
class Jumbo extends Component  {
  render() {
    return (
      <Fragment>
          <br/><br/><br/><br/><br/>
            <Col>
            <div id="ticket_saya">Tiket saya</div>
            <br/><br/>
            <Card id="card_jumbo_ticket">
           <Form id="form_jumbo_ticket1">
          <Form.Row id="form_jumbo_ticket">
            <Form.Group as={Col} controlId="formGridEmail" id="card_judul">
              <h6 id="judul_kereta_ticket"><strong>Argon wilis</strong></h6>
              <p id="Eksekutif">Eksekutif</p>
              <p id="pending">Pending</p>
              <p id="no_tanda"><strong>no tanda pengenal</strong></p>
              <p id="no_tanda2">021 3423428457</p>

            </Form.Group>
            <p id="div1"/>
            <p id="div3"/>
            <p id="div2"/>  

            <Form.Group as={Col} controlId="formGridEmail" id="time">
             <font><strong>05:00</strong></font><br/>
              <small id="mar">21 february 2020</small><br/><br/>

              <font><strong>09:00</strong></font><br/>
              <small>21 february 2020</small><br/><br/>
               <p><strong>nama pemesan</strong></p>
               <p>ibra nurlette</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" id="stasiun">
               <font><strong>jakarta</strong></font><br/>
              <small>stasiun gambir</small><br/><br/>

              <font><strong>surabaya</strong></font><br/>
              <small>stasiun surabaya</small><br/><br/>
               <p><strong>no handphone</strong></p>
               <p>08742789478349</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" id="contack">
               <p><strong>email</strong></p>
               <p>ibra@gmail.com</p>
            </Form.Group>

             <Form.Group as={Col} controlId="formGridPassword" id="name_kereta" className="mr-4 mt-3">
             <h1>kereta api</h1>
               <p>saturday 21 february 2020</p>
            </Form.Group>

          </Form.Row>
          <Button type="submit" id="tombol_cari_kereta2">
            bayar sekarang
          </Button>
          <div id="hr"/>
        </Form>
          </Card>
            </Col>
      </Fragment>
    );
  }
}


export default Jumbo;