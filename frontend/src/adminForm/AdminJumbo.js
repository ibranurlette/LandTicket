import React, {Component , Fragment}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Container, Form} from 'react-bootstrap';
// component jumbo untuk manmpikn jumbotron yang kita miliki
class Jumbo extends Component  {
  render() {
    return (
      <Fragment>
      <Container id="admin">
        <p>tambah tiket</p>
        <Form id="form_admin"  >
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="nama kereta" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option>--jenis kereta--</option>
                <option>eksekutif</option>
                <option>bisniss</option>
                <option>ekonomi</option>
              </Form.Control>
            </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="tanggal keberangkatan"/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="stasiun keberangkatan" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="jam keberangkattan" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="stasiun tujuan" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="jam tiba" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="harga tiket" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="qty" />
          </Form.Group>
          <Button variant="primary" type="submit" id="botton_admin">
            Submit
          </Button>
        </Form>
        </Container>
      </Fragment>
    );
  }
}


export default Jumbo;