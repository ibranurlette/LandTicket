import React, {Component , Fragment}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container, Table } from 'react-bootstrap';
import Modal_edit from './modal_edit';
import Modal_detail from './modal_detail';
import Delete from './modal_delete';
import { connect } from 'react-redux';
import { getPayment } from '../client/_action/payment';
// component jumbo untuk manmpikn jumbotron yang kita miliki
class Jumbo extends Component  {
  componentDidMount(){
    this.props.getPayment();
  }
  render() {
    const {data} = this.props.payment;
    return (
      <Fragment>
      <Container id="transaksi">
      <p id="list_transaksi"><strong>List Transaksi</strong></p>
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
          {data.map((item, index) => (
          <tbody>
            <tr>
              <td key={index}>{item.id}</td>
              <td key={index}>{item?.user?.name}</td>
              <td key={index}>{item?.train?.startStation}-{item?.train?.destination}</td>
              <td key={index}>{item.attachment}</td>
              <td key={index}>{item.status}</td>
              <td>
                <p className="mr-2"><Modal_detail data={item}/></p>
                <p className="mr-2"><Modal_edit id="modal-login" data={item}/></p>
                <p className="mr-2"><Delete data={item} /></p>
              </td>
            </tr>
          </tbody>
          ))}
        </Table>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    payment: state.payment

  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPayment: () => dispatch(getPayment())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Jumbo);
// export default Jumbo;