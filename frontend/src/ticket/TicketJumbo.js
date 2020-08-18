import React, { Component, Fragment } from "react";
import { Col, Form, Card, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { getPayment } from "../client/_action/payment";
import ModalBayar from "./Modal_Bayar";
// component jumbo untuk manmpikn jumbotron yang kita miliki
class Jumbo extends Component {
  componentDidMount() {
    this.props.getPayment();
  }

  render() {
    const { data } = this.props.payment;
    return (
      <Fragment>
        <br />
        <br />
        <br />
        <Col>
          <h2 style={{ marginLeft: "150px" }}>Tiket Saya</h2>
          {data.map((item, index) => (
            <Container>
              <Card
                className="container"
                key={index}
                style={{ marginBottom: "30px" }}
              >
                <Form className="mt-4">
                  <Form.Row>
                    <Form.Group as={Col}>
                      <h5>
                        <strong>{item?.train?.nameTrain}</strong>
                      </h5>
                      <p className="ml-2">{item?.train?.typeTrain?.name}</p>
                      {item.status === "approvad" ? (
                        <p id="approvad">{item.status}</p>
                      ) : (
                        <p id="pending">{item.status}</p>
                      )}
                      <p className="mt-5">
                        <strong>Nama</strong>
                      </p>
                      <p>{item?.user?.name}</p>
                    </Form.Group>
                    <div id="div123">
                      <p id="div1" />
                      <p id="div3" />
                      <p id="div2" />
                    </div>

                    <Form.Group as={Col}>
                      <font>
                        <strong>{item?.train?.startTime}</strong>
                      </font>
                      <br />
                      <small>{item?.train?.dateStart}</small>
                      <br />
                      <br />

                      <font>
                        <strong>{item?.train?.arrivalTime}</strong>
                      </font>
                      <br />
                      <small>{item?.train?.dateStart}</small>
                      <br />
                      <br />
                      <p>
                        <strong>Pemesan</strong>
                      </p>
                      <p>{item?.user?.username}</p>
                    </Form.Group>

                    <Form.Group as={Col}>
                      <font>
                        <strong>Jakarta</strong>
                      </font>
                      <br />
                      <small>{item?.train?.startStation}</small>
                      <br />
                      <br />
                      <font>
                        <strong>Surabaya</strong>
                      </font>
                      <br />
                      <small>{item?.train?.destination}</small>
                      <br />
                      <br />
                      <p>
                        <strong>No Handphone</strong>
                      </p>
                      <p>{item?.user?.phone}</p>
                    </Form.Group>

                    <Form.Group as={Col} className="text-center">
                      <h3>Kereta Api</h3>
                      <p>{item?.train?.dateStart}</p>
                      <ModalBayar data={item} />
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Card>
            </Container>
          ))}
        </Col>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    payment: state.payment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPayment: () => dispatch(getPayment()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Jumbo);

// export default Jumbo;
