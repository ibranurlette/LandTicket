import React, {Component , Fragment}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container, Table } from 'react-bootstrap';
import Modal_login from './modal_edit';
import Modal_detail from './modal_detail';
// component jumbo untuk manmpikn jumbotron yang kita miliki
class Jumbo extends Component  {
  render() {
    return (
      <Fragment>
      <Container id="transaksi">
      <p id="list_transaksi"><strong>List Tsransaksi</strong></p>
         <Table responsive>
          <thead>
            <tr>
              <th>no</th>
              <th>user</th>
              <th>ticket</th>
              <th>bukti transafer</th>
              <th>status payment</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ibra</td>
              <td>surabaya - jakarta</td>
              <td>1.png</td>
              <td>aproved</td>
              <td>
                <Button variant="info" className="mr-2"><Modal_detail/></Button>
                <Button variant="link" className="mr-2"> <Modal_login id="modal-login" /></Button>
                <Button variant="danger">delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        </Container>
      </Fragment>
    );
  }
}


export default Jumbo;