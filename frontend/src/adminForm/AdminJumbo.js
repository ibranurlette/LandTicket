import React, {Component , Fragment}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Container, Form} from 'react-bootstrap';
import { connect } from "react-redux";
import { Tambah_train } from "../client/_action/tambah_train";
import { getType_train } from '../client/_action/type_train';
// component jumbo untuk manmpikn jumbotron yang kita miliki
class Jumbo extends Component  {
  componentDidMount(){
    this.props.getType_train();
  }
  constructor(props) {
    super(props);
    this.state = {
      nameTrain: null,
      typeTrain_id: null,
      dateStart: null,
      startStation: null,
      startTime: null,
      destination: null,
      arrivalTime: null,
      price: null,
      qty: null
    };
  }
  handleTambah = e => {
    e.preventDefault();
    const data = {
      nameTrain: this.state.nameTrain,
      typeTrain_id: this.state.typeTrain_id,
      dateStart: this.state.dateStart,
      startStation: this.state.startStation,
      startTime: this.state.startTime,
      destination: this.state.destination,
      arrivalTime: this.state.arrivalTime,
      price: this.state.price,
      qty: this.state.qty
    };
    console.log(data, "ini darta tambah")
    this.props.Tambah_train(data);
    window.location.reload(false);
  };
   handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const {data} = this.props.Type_train;
    return (
      <Fragment>
      <Container id="admin">
        <p>tambah tiket</p>
        <Form id="form_admin"  >
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text"  onChange={this.handleChange} placeholder="nama_kereta" name="nameTrain"/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select" name="typeTrain_id"  onChange={this.handleChange}>
                <option>--jenis kereta--</option>
                {data.map((item, index) => (
                <option key={index}>{item.name}</option>
                  ))}
              </Form.Control>
            </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="tanggal keberangkatan"name="dateStart"  onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="stasiun keberangkatan" name="startStation"  onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="jam keberangkattan" name="startTime"  onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="stasiun tujuan" name="destination"  onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="jam tiba" name="arrivalTime"  onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="harga tiket" name="price"  onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="qty" name="qty"  onChange={this.handleChange}/>
          </Form.Group>
          <Button variant="primary" type="submit" id="botton_admin" onClick={this.handleTambah}>
            Submit
          </Button>
        </Form>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    Tambah_train: state.Tambah_train,
     Type_train: state.Type_train
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getType_train: () => dispatch(getType_train()),
    Tambah_train: data => dispatch(Tambah_train(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Jumbo);


// export default Jumbo;