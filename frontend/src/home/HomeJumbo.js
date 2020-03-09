import React, {Component , Fragment}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Row, Col, Form, Card, Table } from 'react-bootstrap';
import logo from '../img/belanja.jpg';

// component jumbo untuk manmpikn jumbotron yang kita miliki
class Jumbo extends Component  {
  render() {
    return (
      <Fragment>
      <Jumbotron className="text-center bg-transparent jumbo1" id="jumbo1">
        <Row>
          <Col sm={6}><h1 className="judul_jumbo">Selamat Pagi, Tiket Seekers</h1>
          <h1 className="jumbo_title">ingin pulang dengan good deal ? <br/>masuk atau daftart sekarang !!</h1>
          </Col>
          <Col sm={6}>
            <img alt="logo" id="logo" src={logo} />
          </Col>
        </Row>
      </Jumbotron>
            <Col>
            <Card id="card_jumbo">
           <Form id="form_jumbo">
          <Form.Row id="form_jumbo1">
            <Form.Group as={Col} controlId="formGridEmail" id="card_judul">
              <h5 id="judul_kereta">tiket kerta api</h5>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <h3>Tiket kereta api</h3>
              <Form.Label>asal</Form.Label>
              <Form.Control type="email" placeholder="asal" id="text_jumbo"/>

              <Form.Label>tanggal berangkat</Form.Label>
              <Form.Control as="select" id="select_jumbo">
                <option>DD-MM-YY</option>
                <option>DD-MM-YY</option>
              </Form.Control>
              <Form.Check type="checkbox" label="pulang pergi" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="tujuan">tujuan</Form.Label>
              <Form.Control type="text" placeholder="tujuan" id="text_jumbo"/>
               <Form.Label>dewasa</Form.Label>
              <Form.Control as="select" id="select_jumbo">
                <option>1</option>
                <option>2</option>
              </Form.Control>
              <Form.Label>anak-anak</Form.Label>
              <Form.Control as="select" id="select_jumbo">
                <option>1</option>
                <option>2</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Button type="submit" id="tombol_cari_kereta">
            cari kereta
          </Button>
        </Form>
          </Card>
            </Col>



      <Jumbotron className="text-center bg-transparent jumbo2">
        <Row>
          <Col>
            <Table bordered>
              <thead>
                <tr>
                  <th>nama kereta</th>
                  <th>berangkat</th>
                  <th>tiba</th>
                  <th>durasi</th>
                  <th>harga per orang</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>argo wilis</td>
                  <td>05.00 p. panjang</td>
                  <td>07.00 kota tua</td>
                  <td>2 jam</td>
                  <td>10.000</td>
                </tr>
                 <tr>
                  <td>rija rigis</td>
                  <td>06.00 p. jurangmangu</td>
                  <td>09.00 cipinang</td>
                  <td>4 jam</td>
                  <td>15. 000</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Jumbotron>
      </Fragment>
    );
  }
}


export default Jumbo;