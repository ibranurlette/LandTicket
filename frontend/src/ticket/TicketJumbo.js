import React, {Component , Fragment}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getPayment } from '../client/_action/payment';
import Modal_Bayar from './Modal_Bayar';
// component jumbo untuk manmpikn jumbotron yang kita miliki
class Jumbo extends Component  {
    componentDidMount(){
    this.props.getPayment();
  }

  render() {
     const {data} = this.props.payment;
    return (
      <Fragment>
          <br/><br/><br/><br/><br/>
            <Col>
            <div id="ticket_saya">Tiket saya</div>
            <br/><br/>
          {data.map((item, index) => (
            <Card key={index} id="card_jumbo_ticket">
           <Form id="form_jumbo_ticket1">
          <Form.Row id="form_jumbo_ticket">
            <Form.Group as={Col} controlId="formGridEmail" id="card_judul">
              <h6 id="judul_kereta_ticket"><strong>{item?.train?.nameTrain}</strong></h6>
              <p id="Eksekutif">{item?.train?.typeTrain?.name}</p>
              {item.status==="approvad" ? (
               <p id="approvad">{item.status}</p>
                ):(
                  <p id="pending">{item.status}</p>
                )}
              <p id="no_tanda"><strong>name</strong></p>
              <p id="no_tanda2">{item?.user?.name}</p>
            </Form.Group>

            <p id="div1"/>
            <p id="div3"/>
            <p id="div2"/>

            <Form.Group as={Col} controlId="formGridEmail" id="time">
             <font><strong>{item?.train?.startTime}</strong></font><br/>
              <small id="mar">{item?.train?.dateStart}</small><br/><br/>

              <font><strong>{item?.train?.arrivalTime}</strong></font><br/>
              <small>{item?.train?.dateStart}</small><br/><br/>
               <p><strong>nama pemesan</strong></p>
               <p>{item?.user?.username}</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" id="stasiun">
               <font><strong>jakarta</strong></font><br/>
              <small>{item?.train?.startStation}</small><br/><br/>
              <font><strong>surabaya</strong></font><br/>
              <small>{item?.train?.destination}</small><br/><br/>
               <p><strong>no handphone</strong></p>
               <p>{item?.user?.phone}</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" id="contack">
               <p><strong>email</strong></p>
               <p>{item?.user?.email}</p>
            </Form.Group>

             <Form.Group as={Col} controlId="formGridPassword" id="name_kereta" className="mr-4 mt-3">
             <h1>kereta api</h1>
               <p>{item?.train?.dateStart}</p>
            </Form.Group>
          </Form.Row>
         <Modal_Bayar data={item}/>
          <div id="hr"/>
        </Form>
          </Card>
             ))}
            </Col>
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