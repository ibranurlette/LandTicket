import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Jumbotron,
  Button,
  Row,
  Col,
  Form,
  Card,
  Table,
} from "react-bootstrap";
import logo from "../img/belanja2.jpg";
import { MdSwapHoriz } from "react-icons/md";
import { IoMdTrain } from "react-icons/io";
import { connect } from "react-redux";
import { getMyticket } from "../client/_action/ticket";
import { get_ticket } from "../client/_action/cari_ticket";
import moment from "moment";
import ModalBeli from "./modal_beli";
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
        <div id="jumbo3">
          <Col>
            <Card id="card_jumbo" className="shadow">
              <Form id="form_jumbo">
                <Form.Row id="form_jumbo1">
                  <Form.Group as={Col} id="form_judul_kereta">
                    <IoMdTrain id="train" />
                    <h5 id="judul_kereta">Tiket kerta api</h5>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <div id="tiket_kereta_api">Tiket kereta api</div>
                    <Form.Label>
                      <strong>Asal</strong>
                    </Form.Label>
                    <Form.Control as="select" id="select_Asal">
                      {data.map((item2, index) => (
                        <option
                          key={index}
                          onChange={this.handleAsal}
                          value={this.state.valueAsal}
                        >
                          {item2.startStation}
                        </option>
                      ))}
                    </Form.Control>
                    {/*<Form.Control type="text" placeholder="asal" id="asal"  onChange={this.handleAsal} value={this.state.valueAsal}/>*/}
                    <div onClick={this.handleTukar}>
                      <p id="arah" />
                      <MdSwapHoriz id="swap" />
                    </div>

                    <Form.Label className="mt-2">
                      <strong>Tanggal Berangkat</strong>
                    </Form.Label>
                    <div id="flex_box">
                      <Form.Control
                        type="date"
                        id="date"
                        className="mr-4"
                        name="ds"
                        onChange={this.handleChange}
                      />
                      <div id="pulang_pergi">
                        <Form.Check type="checkbox" label="Pulang Pergi" />
                      </div>
                    </div>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label className="tujuan" name="destination">
                      <strong>Tujuan</strong>
                    </Form.Label>
                    <Form.Control as="select" id="select_Asal">
                      {data.map((item3, index) => (
                        <option
                          key={index}
                          onChange={this.handleTujuan}
                          value={this.state.valueTujuan}
                        >
                          {item3.destination}
                        </option>
                      ))}
                    </Form.Control>
                    {/*<Form.Control type="text" placeholder="tujuan" id="tujuan"  onChange={this.handleTujuan}    value={this.state.valueTujuan}/>*/}
                    <Form.Label className="mt-2 ">
                      <strong>Dewasa</strong>
                    </Form.Label>
                    <div id="flex_box">
                      <Form.Control as="select" id="select_jumbo">
                        <option>1</option>
                        <option>2</option>
                      </Form.Control>

                      <Form.Label className="mt-2" id="bayi">
                        <strong>Bayi</strong>
                      </Form.Label>
                      <Form.Control as="select" id="bayi_select">
                        <option>1</option>
                        <option>2</option>
                      </Form.Control>
                    </div>
                  </Form.Group>
                </Form.Row>
                <div id="flex_box">
                  <Button
                    type="submit"
                    id="tombol_cari_kereta"
                    onClick={this.handlesearch}
                  >
                    Cari Kereta
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>

          <Jumbotron className="text-center bg-transparent jumbo2">
            <Table responsive>
              <thead>
                <tr id="table_judul">
                  <th>no</th>
                  <th>nama kereta</th>
                  <th>berangkat</th>
                  <th>tiba</th>
                  <th>durasi</th>
                  <th>harga per orang</th>
                  {isLogin || token ? <th>beli</th> : ""}
                </tr>
              </thead>

              {data.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.nameTrain}</td>
                    <td>
                      <font>
                        <strong>{item.startStation}</strong>
                      </font>
                      <br />
                      <small>{item.startTime}</small>
                    </td>
                    <td>
                      <font>
                        <strong>{item.destination}</strong>
                      </font>
                      <br />
                      <small>{item.arrivalTime}</small>
                    </td>
                    <td>{getDuration(item.startTime, item.arrivalTime)}</td>
                    <td>Rp. {item.price}</td>
                    <td>{isLogin || token ? <ModalBeli data={item} /> : ""}</td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Jumbotron>
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
