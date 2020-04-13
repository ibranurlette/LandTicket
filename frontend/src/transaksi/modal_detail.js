import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal, Row, Col, Form, Card } from 'react-bootstrap';
import struk from '../img/struk.jpeg';
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
      const data = this.props.data
    return (
      <main>
      <Modal show={this.state.show} onHide={this.hideModalLogin} id="modal_detail" size="lg">
            <Card id="card_jumbo_detail">
           <Row>
           <Col sm={5}>
          <font id="detail_invoice"><strong>invoice</strong></font><br/>
             <font id="detail_kereta"><strong>kereta api</strong></font>
             <p id="tanggal">{data?.train?.dateStart}</p>

             <p id="div4"/>
            <p id="div5"/>
            <p id="div6"/>
             <font id="time_travel"><strong>{data?.train?.startTime}</strong></font>
             <p id="time_travel"><small>{data?.train?.dateStart}</small></p>
             <font id="time_travel"><b>{data?.train?.arrivalTime}</b></font>
             <p id="time_travel"><small>{data?.train?.dateStart}</small></p>

           </Col>
          <Col sm={4}>
              <div id="div">
          <font id="name_train_detail"><strong>{data?.train?.nameTrain}</strong></font>
             <p id="type_train_detail">{data?.train?.typeTrain?.name}</p>

              <font id="kota"><strong>jakrata</strong></font>
             <p id=""><small>{data?.train?.startStation}r</small></p>
             <font id=""><strong>surabaya</strong></font>
             <p id=""><small>{data?.train?.destination}</small></p>
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
            <div id="no_tanda_transaksi">
              <p ><strong>name</strong></p>
              <p >{data?.train?.user?.name}</p>
              </div>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" id="name_pemesan_detail">
               <p><strong>{data?.train?.user?.username}</strong></p>
               <p>ibra nurlette</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" id="phone_detail">
               <p><strong>no handphone</strong></p>
               <p>{data?.train?.user?.phone}</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" id="email_detail">
               <p><strong>email</strong></p>
               <p>{data?.train?.user?.email}</p>
            </Form.Group>
          </Form.Row>
        </Form>
        <hr id="hr_detail"/>
        <div id="div_detail">
        <font id="total_detail2"><strong>Total</strong></font>
        <p id="total_detail"><b>Rp. {data.Total_price}</b></p>
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






