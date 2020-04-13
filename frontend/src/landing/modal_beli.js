import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal, Row, Col, Form, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Beli_ticket } from "../client/_action/beli_ticket";
import { TiShoppingCart } from 'react-icons/ti';
// import Modal_selamat from './Modal_selamat';
class Modal_beli extends Component {

   state = { show: false, counter: 0, status: "pending"};

    showModalLogin = () => {
    this.setState({ show: true });
  };

  hideModalLogin = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 500)
  };
  handleBeli = data => {

    const Train_id = data.id;
    const qty = this.state.counter;
    const Total_price = data.price;
    const status = "pending";

    const data2 = {
     Train_id, qty, Total_price,status
    }
    this.props.Beli_ticket(data2);
    window.location.reload(false);

  }
  handleCounter = (e) => {
    e.preventDefault();
    this.setState({counter:e.target.value})
    console.log(this.state.counter, "ini conter")
  }
  handlePlus =()=> {
      this.setState({counter: this.state.counter + 1})
  }
  handleMin =()=> {
      this.setState({counter: this.state.counter - 1})
  }
  render() {
    const data = this.props.data
    return (
      <main>
      <Modal show={this.state.show} onHide={this.hideModalLogin} id="modal_detail" size="lg">
            <Card id="card_jumbo_beli">
           <Row>
           <Col sm={6}>
          <font id="detail_beli"><strong>Booking Ticket</strong></font><br/>
             <font id="detail_kereta"><strong>kereta api</strong></font>
             <p id="tanggal">{data.dateStart}</p>

             <p id="div4"/>
            <p id="div5"/>
            <p id="div6"/>
             <font id="time_travel" ><strong>{data.startTime}</strong></font>
             <p id="time_travel" ><small>{data.dateStart}</small></p>
             <font id="time_travel"><b>{data.arrivalTime}</b></font>
             <p id="time_travel" ><small>{data.dateStart}</small></p>
           </Col>
          <Col sm={5}>
           <div id="div_beli">
             <font id="name_train"><strong>{data.nameTrain}</strong></font>
             <p id="type_train">{data?.typeTrain?.name}</p>
             </div>
              <div id="">
             <font id="kota_stasiun"><strong>jakarta</strong></font>
             <p id=""><small>{data.startStation}</small></p>
             <font id=""><strong>surabaya</strong></font>
             <p id=""><small>{data.destination}</small></p>
             </div>
           </Col>
           <Col sm={1}>
           <div >
             <Form.Group controlId="formBasicEmail" id="indec3">
                <Form.Label><center>Qty</center></Form.Label><br/>
                  <Button id="indec" onClick={this.handlePlus}><font id="plus">+</font></Button>
                    <input value={this.state.counter} id="qty" name="counter" onChange={this.handleCounter}/>
                    {this.state.counter===0 ?(
                          <p id="display"/>
                      ): (
                        <Button id="indec2" onClick={this.handleMin} ><font id="min" >-</font></Button>
                      )}
              </Form.Group>
             </div>
           </Col>
           </Row>

           <hr/>
           <Form >
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail" id="name_beli">
              <p ><strong>name</strong></p>
              <p >{data?.user?.name}</p>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" id="name_pemesan_beli">
               <p><strong>nama pemesan</strong></p>
               <p>{data?.user?.username}</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" >
               <p><strong>no handphone</strong></p>
               <p>{data?.user?.phone}</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
               <p><strong>email</strong></p>
               <p>{data?.user?.email}</p>
            </Form.Group>
          </Form.Row>
          </Form>
        <hr id="hr_detail"/>
        <div id="div_beli2">
        <font id="total_detail2"><strong>price</strong></font>
        <p id="total_detail"><b>Rp. {data.price}</b></p>
        </div>
          <Button id="botton_beli_sekarang" onClick={()=> this.handleBeli(data)}>book now</Button>
        <Button onClick={this.hideModalLogin} id="botton_close_beli">
            Close
          </Button>
          </Card>
        </Modal>
        <div onClick={this.showModalLogin}><p id="shoping"/>
        <TiShoppingCart id="shoping_beli" onClick={this.handlGetOne_ticket}/>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Beli_ticket: (dataTicket) => dispatch(Beli_ticket(dataTicket))

  }
}

export default connect(null, mapDispatchToProps)(Modal_beli);
// export default Modal_beli;






