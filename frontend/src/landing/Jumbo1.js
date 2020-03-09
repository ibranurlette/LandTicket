import React, {Component , Fragment}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Row, Col, Form, Card, Table } from 'react-bootstrap';
import logo from '../img/belanja2.jpg';
import { MdSwapHoriz } from 'react-icons/md';
import { IoMdTrain } from 'react-icons/io';
import { connect } from 'react-redux';
import { getMyticket } from '../client/_action/ticket';
// component jumbo untuk manmpikn jumbotron yang kita miliki
class Jumbo extends Component  {
 componentDidMount(){
    this.props.getMyticket();
  }

  render() {
     const {data} = this.props.ticket;
    return (
      <Fragment>
      <Jumbotron className="text-center bg-transparent jumbo1" id="jumbo1">
        <Row>
          <Col sm={6}><h1 className="judul_jumbo">Selamat Pagi, Tiket Seekers</h1>
          <h1 className="jumbo_title">Ingin pulang dengan good deal ? <br/>Masuk atau daftar sekarang !</h1>
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

            <Form.Group as={Col} controlId="formGridEmail" id="form_judul_kereta">
            <IoMdTrain id="train"/>
              <h5 id="judul_kereta">Tiket kerta api</h5>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <div id="tiket_kereta_api">Tiket kereta api</div>
              <Form.Label><strong>Asal</strong></Form.Label>
              <Form.Control type="email" placeholder="asal" id="asal"/>

              <p id="arah"/>
              <MdSwapHoriz id="swap"/>

              <Form.Label className="mt-2"><strong>Tanggal Berangkat</strong></Form.Label>
              <div id="flex_box">
              <Form.Control type="date" id="date" className="mr-4"/>
              <p id="pulang_pergi">
              <Form.Check type="checkbox" label="Pulang Pergi" />
              </p>
              </div>

              </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="tujuan"><strong>Tujuan</strong></Form.Label>
              <Form.Control type="text" placeholder="tujuan" id="tujuan"/>
               <Form.Label className="mt-2 "><strong>Dewasa</strong></Form.Label>
              <div id="flex_box">
              <Form.Control as="select" id="select_jumbo" >
                <option>1</option>
                <option>2</option>
              </Form.Control>

              <Form.Label className="mt-2" id="bayi"><strong>Bayi</strong></Form.Label>
              <Form.Control as="select" id="bayi_select">
                <option>1</option>
                <option>2</option>
              </Form.Control>
              </div>
              </Form.Group>
          </Form.Row>
          <div id="flex_box">
          <Button type="submit" id="tombol_cari_kereta">
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
            <th>nama kereta</th>
            <th>berangkat</th>
            <th>tiba</th>
            <th>durasi</th>
            <th>harga per orang</th>
          </tr>
        </thead>

       {data.map((item, index) => (
        <tbody>
          <tr>
            <td key={index}>{item.nameTrain}</td>
            <td key={index}><font><strong>{item.startTime}</strong></font><p>{item.startStation}</p></td>
            <td key={index}><font><strong>{item.arrivalTime}</strong></font><p>{item.destination}</p></td>
            <td>{item.arrivalTime} - {item.startTime}</td>
            <td key={index}>{item.price}</td>
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

const mapStateToProps = state => {
  return {
    ticket: state.ticket
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMyticket: () => dispatch(getMyticket())
  }
}

// export default Jumbo;
export default connect(mapStateToProps, mapDispatchToProps)(Jumbo);