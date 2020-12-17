import React, { Component, Fragment } from "react";
import {
  Jumbotron,
  Button,
  Row,
  Col,
  Form,
  Card,
  Table,
  Container,
} from "react-bootstrap";
import { connect } from "react-redux";
import moment from "moment";
import { MdSwapHoriz } from "react-icons/md";

import ModalBeli from "./modal_beli";

import logo from "../img/belanja2.jpg";

import { getMyticket } from "../client/_action/ticket";
import { get_ticket } from "../client/_action/cari_ticket";
import { login } from "../client/_action/auth";

// component jumbo untuk manmpikn jumbotron yang kita miliki
class Jumbo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valuAsal: "",
      valueTujuan: "",
      ds: "",
    };
  }
  componentDidMount() {
    const dateStart = this.state.ds;
    this.props.get_ticket(dateStart);
  }
  handlesearch = (e) => {
    e.preventDefault();
    const data = {
      dateStart: this.state.ds,
    };
    this.props.get_ticket(data.dateStart);
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      ds: e.target.value,
    });
  };
  handleAsal = (e) => {
    e.preventDefault();
    this.setState({
      valueAsal: e.target.value,
    });
  };
  handleTujuan = (e) => {
    e.preventDefault();
    this.setState({
      valueTujuan: e.target.value,
    });
  };
  handleTukar = (e) => {
    e.preventDefault();
    this.setState({
      valueAsal: this.state.valueTujuan,
      valueTujuan: this.state.valueAsal,
    });
  };

  render() {
    const getDuration = (timeA, timeB) => {
      let startTime = moment(timeA, "HH:mm:ss");
      let endTime = moment(timeB, "HH:mm:ss");
      let duration = moment.duration(endTime.diff(startTime));
      let hours = parseInt(duration.asHours());
      let minutes = parseInt(duration.asMinutes()) - hours * 60;
      return `${hours} Jam ${minutes} Menit`;
    };
    const { data } = this.props.Cari_ticket;
    const { isLogin } = this.props.auth;
    const token = localStorage.getItem("token");
    // const data2 = this.props.Cari_ticket.data;
    return (
      <Fragment>
        <Jumbotron className="text-center bg-transparent jumbo1" id="jumbo1">
          <Row>
            <Col sm={6}>
              <h1 className="judul_jumbo">Selamat Pagi, Tiket Seekers</h1>
              <h1 className="jumbo_title">
                Ingin pulang dengan good deal ? <br />
                Masuk atau daftar sekarang !
              </h1>
            </Col>
            <Col sm={6}>
              <img alt="logo" id="logo" src={logo} />
              <img alt="logo2" id="logo2" src={logo} />
            </Col>
          </Row>
        </Jumbotron>
        <div>
          <div className="container">
            <Card border="light">
              <Card.Header>Tiket Kereta</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Row>
                    <Col sm={5}>
                      <Form.Group>
                        <Form.Label>
                          <strong>Asal</strong>
                        </Form.Label>
                        {/* <Form.Control as="select" id="select_Asal">
                          {data.map((item2, index) => (
                            <option
                              key={index}
                              onChange={this.handleAsal}
                              value={this.state.valueAsal}
                            >
                              {item2.startStation}
                            </option>
                          ))}
                        </Form.Control> */}
                        <Form.Control
                          type="text"
                          placeholder="asal"
                          onChange={this.handleAsal}
                          value={this.state.valueAsal}
                        />

                        <Form.Label className="mt-2">
                          <strong>Tanggal Berangkat</strong>
                        </Form.Label>
                        <div>
                          <Form.Control
                            type="date"
                            className="mr-4"
                            name="ds"
                            onChange={this.handleChange}
                          />
                        </div>
                      </Form.Group>
                    </Col>
                    <Col sm={2}>
                      <div onClick={this.handleTukar}>
                        <MdSwapHoriz className="mx-auto d-block mt-5" />
                      </div>
                    </Col>
                    <Col sm={5}>
                      <Form.Group>
                        <Form.Label name="destination">
                          <strong>Tujuan</strong>
                        </Form.Label>
                        {/* <Form.Control as="select">
                          {data.map((item3, index) => (
                            <option
                              key={index}
                              onChange={this.handleTujuan}
                              value={this.state.valueTujuan}
                            >
                              {item3.destination}
                            </option>
                          ))}
                        </Form.Control> */}
                        <Form.Control
                          type="text"
                          placeholder="tujuan"
                          onChange={this.handleTujuan}
                          value={this.state.valueTujuan}
                        />

                        <div>
                          <Button
                            type="submit"
                            style={{ marginTop: "40px" }}
                            onClick={this.handlesearch}
                          >
                            Cari Kereta
                          </Button>
                        </div>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                </Form>
              </Card.Body>
            </Card>
          </div>

          <Container style={{ marginBottom: "70px" }}>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama kereta</th>
                  <th>Berangkat</th>
                  <th>Tiba</th>
                  <th>Durasi</th>
                  <th>Harga / Orang</th>
                  {isLogin || token ? <th>Beli</th> : ""}
                </tr>
              </thead>
              {data.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.nameTrain}</td>
                    <td>
                      <strong>{item.startStation}</strong>
                      <br />
                      <small>{item.startTime}</small>
                    </td>
                    <td>
                      <strong>{item.destination}</strong>
                      <br />
                      <small>{item.arrivalTime}</small>
                    </td>
                    <td>{getDuration(item.startTime, item.arrivalTime)}</td>
                    <td>Rp. {item.price}</td>
                    {isLogin || token ? (
                      <td>
                        <ModalBeli data={item} />
                      </td>
                    ) : (
                      ""
                    )}
                  </tr>
                </tbody>
              ))}
            </Table>
          </Container>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ticket: state.ticket,
    Cari_ticket: state.Cari_ticket,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMyticket: () => dispatch(getMyticket()),
    get_ticket: (dateStart) => dispatch(get_ticket(dateStart)),
    login: (data) => dispatch(login(data)),
  };
};

// export default Jumbo;
export default connect(mapStateToProps, mapDispatchToProps)(Jumbo);
