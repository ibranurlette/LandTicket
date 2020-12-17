import React, { Component } from "react";
import { Button, Modal, Row, Col, Container, Card } from "react-bootstrap";
// import struk from "../img/struk.jpeg";

class ModalDetail extends Component {
  state = { show: false };

  showModalLogin = () => {
    this.setState({ show: true });
  };

  hideModalDetail = () => {
    let hide = this.setState({ show: false });
    setInterval(hide, 500);
  };

  render() {
    const data = this.props.data;
    return (
      <main>
        <Modal show={this.state.show} onHide={this.hideModalDetail} size="lg">
          <Card.Header>
            <Modal.Title>Invoice</Modal.Title>
          </Card.Header>
          <Modal.Body>
            <Card>
              <Row>
                <Col xs={4}>
                  <div className="ml-2">
                    <h3>
                      <strong>Kereta Api</strong>
                    </h3>
                    <p>{data.train.dateStart}</p>
                  </div>
                  <div className="ml-5">
                    <font>
                      <strong>{data.train.startTime}</strong>
                    </font>
                    <p>
                      <small>{data.train.dateStart}</small>
                    </p>
                    <font>
                      <b>{data.train.arrivalTime}</b>
                    </font>
                    <p>
                      <small>{data.train.dateStart}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="">
                    <h5>
                      <strong>{data.train.nameTrain}</strong>
                    </h5>
                    <p>{data.train.typeTrain.name}</p>

                    <h5>
                      <strong>Jakrata</strong>
                    </h5>
                    <p>
                      <small>{data.train.startStation}r</small>
                    </p>
                    <h5>
                      <strong>Surabaya</strong>
                    </h5>
                    <p>
                      <small>{data.train.destination}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="mt-2">
                    <font>
                      <img
                        alt="struk_detail"
                        id="struk_detail"
                        src={data.attachment}
                      />
                    </font>
                    <br />
                    <font>Bukti Pembayaran</font>
                  </div>
                </Col>
              </Row>
              <Card className="ml-1 mr-1">
                <Container className="mt-2">
                  <Row>
                    <Col xs={3}>
                      <div>
                        <p>
                          <strong>Nama</strong>
                        </p>
                        <p>{data.train.user.name}</p>
                      </div>
                    </Col>
                    <Col xs={3}>
                      <div>
                        <p>
                          <strong>Pemesan</strong>
                        </p>
                        <p>
                          <p>{data.train.user.username}</p>
                        </p>
                      </div>
                    </Col>
                    <Col xs={3}>
                      <div>
                        <p>
                          <strong>Handphone</strong>
                        </p>
                        <p>{data.train.user.phone}</p>
                      </div>
                    </Col>
                    <Col xs={3}>
                      <div>
                        <p>
                          <strong>Email</strong>
                        </p>
                        <p>{data.train.user.email}</p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Card>
              <hr />
              <Container>
                <Row>
                  <Col xs={6}>
                    <h3>
                      <strong>Total</strong>
                    </h3>
                  </Col>
                  <Col xs={6}>
                    <p className="text-center">
                      <b>Rp. {data.Total_price}</b>
                    </p>
                  </Col>
                </Row>
              </Container>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModalDetail} variant="warning">
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Button onClick={this.showModalLogin} variant="info">
          Detail
        </Button>
      </main>
    );
  }
}
export default ModalDetail;
