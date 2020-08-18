import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Row, Col, Form, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Beli_ticket } from "../client/_action/beli_ticket";
import { TiShoppingCart } from "react-icons/ti";
// import Modal_selamat from './Modal_selamat';
class Modal_beli extends Component {
  state = { show: false, counter: 0, status: "pending" };

  showModalLogin = () => {
    this.setState({ show: true });
  };

  hideModalLogin = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 500);
  };
  handleBeli = (data) => {
    const Train_id = data.id;
    const qty = this.state.counter;
    const Total_price = data.price;
    const status = "pending";

    const data2 = {
      Train_id,
      qty,
      Total_price,
      status,
    };
    this.props.Beli_ticket(data2);
    window.location.reload(false);
  };
  handleCounter = (e) => {
    e.preventDefault();
    this.setState({ counter: e.target.value });
    console.log(this.state.counter, "ini conter");
  };
  handlePlus = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleMin = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    const data = this.props.data;
    return (
      <main>
        <Modal show={this.state.show} size="lg" onHide={this.hideModalLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Booking Ticket</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Row>
                <Col xs={4}>
                  <h3>
                    <b>Kereta Api</b>
                  </h3>
                  <p className="ml-3">{data.dateStart}</p>

                  <p id="div4" />
                  <p id="div5" />
                  <p id="div6" />
                  <div className="ml-5">
                    <font>
                      <b>{data.startTime}</b>
                    </font>
                    <p>
                      <small>{data.dateStart}</small>
                    </p>
                    <font>
                      <b>{data.arrivalTime}</b>
                    </font>
                    <p>
                      <small>{data.dateStart}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={4} className="mt-5 ">
                  <div>
                    <div>
                      <font>
                        <b>{data.nameTrain}</b>
                      </font>
                      <p>{data?.typeTrain?.name}</p>
                    </div>
                    <div id="">
                      <font>
                        <b>jakarta</b>
                      </font>
                      <p id="">
                        <small>{data.startStation}</small>
                      </p>
                      <font>
                        <b>surabaya</b>
                      </font>
                      <p>
                        <small>{data.destination}</small>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="text-center">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="mt-5">
                        <center>Qty</center>
                      </Form.Label>
                      <br />
                      <Button variant="primary" onClick={this.handlePlus}>
                        <font>+</font>
                      </Button>
                      <input
                        value={this.state.counter}
                        id="qty"
                        name="counter"
                        onChange={this.handleCounter}
                      />
                      {this.state.counter === 0 ? (
                        <p id="display" />
                      ) : (
                        <Button variant="danger" onClick={this.handleMin}>
                          <font>-</font>
                        </Button>
                      )}
                    </Form.Group>
                  </div>
                </Col>
              </Row>

              <hr />
              <Row className="container">
                <Col xs={6}>
                  <h4>
                    <b>Harga Tiket</b>
                  </h4>
                </Col>
                <Col xs={6}>
                  <p>
                    <b className="float-right">Rp. {data.price}</b>
                  </p>
                </Col>
              </Row>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={this.hideModalLogin}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.handleBeli(data)}>
              Book Now
            </Button>
          </Modal.Footer>
        </Modal>
        <div onClick={this.showModalLogin}>
          <p id="shoping" />
          <TiShoppingCart id="shoping_beli" onClick={this.handlGetOne_ticket} />
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Beli_ticket: (dataTicket) => dispatch(Beli_ticket(dataTicket)),
  };
};

export default connect(null, mapDispatchToProps)(Modal_beli);
// export default Modal_beli;
