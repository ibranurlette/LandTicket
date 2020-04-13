import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Row, Col, Form, Card,Container } from 'react-bootstrap';
import { TiWarningOutline } from 'react-icons/ti';
import { connect } from 'react-redux';
import qr_code from '../img/qr.png';
import { uploadProof } from '../client/_action/upload';
class Modal_Bayar extends Component {
   state = { show: false,modal_sukses:false, file: null, preview: null, modal_gagal:false};
  // componentDidMount() {

  // }

  hideModalLogin = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 500)
  };
  showModalLogin = () => {
    this.setState({ show: true });
  };

  hadlePay = (file) => {
      const id = this.props.data.id
     if (file) {
      const formData = new FormData();
      formData.append("payment", file);
      this.props.uploadProof(formData, id);
      this.setState({
        modal_sukses:true
      })
    } else {
       this.setState({
        modal_gagal:true
      })
    }
  }
render(){
	const data = this.props.data
  const {file } = this.state
  return (
    <Fragment>

      <Modal size="xl" show={this.state.show} onHide={this.hideModalLogin} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton  id="example-modal-sizes-title-lg">
          <Modal.Title>Pembayaran</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Col>
        	<div id="ticket_saya_bayar">Tiket saya</div>
            <br/><br/>
            <Card id="card_jumbo_invoice">
           <Form id="form_jumbo_invoice">
          <Form.Row id="form_jumbo_invoice1">
            <Form.Group as={Col} controlId="formGridEmail" id="card_judul">
              <p id="no_tanda_invoice"><strong>name</strong></p>
              <p id="no_tanda2">{data?.user?.name}</p>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" id="time_invoice">
               <p><strong>nama pemesan</strong></p>
               <p>{data?.user?.username}</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" id="stasiun_invoice">
               <p><strong>no handphone</strong></p>
               <p>{data?.user?.phone}</p>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" id="contack_invoice">
               <p><strong>email</strong></p>
               <p>{data?.user?.email}</p>
            </Form.Group>
          </Form.Row>
        </Form>
          </Card>
            </Col>
            <Card id="card_jumbo_invoice2">
            <TiWarningOutline id="warning"/>
           <p id="pembayaran">silhkan lakukan pembayaran melalui m banking, e-bangking, dan atm ke no rek yang tertera</p>
           <p id="pembayaran2">9830479205724</p>
          </Card>
          <div>
          <div id="rincian_harga">Rincian Harga</div>
           <Card id="card_jumbo_invoice3">

           <Row>
            <div id="pembatas"/>
           <Col sm={8}>
             <p id="pembayaran3"><strong>{data?.train?.namaTrain}</strong></p>
             <p id="total"><strong>train</strong></p>
             <p id="total"><strong>total</strong></p>

           </Col>
          <Col sm={4}>
              <p id="pembayaran4">{data?.train?.nameTrain}</p>
              <p id="pembayaran4">{data.Total_price}</p>
           </Col>
           </Row>
          </Card>
          <Button type="submit" id="tombol_bayar_sekarang" onClick={()=>this.hadlePay(file)}>
            bayar sekarang
          </Button>
          <img src={this.state.preview} alt="preview" id="preview_image"></img>
         <form encType="multipart/form-data">
            <input
              className="invoice-choose-file file_upload"
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              name="payment"
              onChange={e => {
                 this.setState({
                  file:e.target.files[0],
                  preview:URL.createObjectURL(e.target.files[0])
                })
              }}
            />
          </form>
          <Modal
            className="fontx"
            size="sm"
            show={this.state.modal_sukses}
            onHide={()=> this.setState({
              modal_sukses:false
            })}

          >
            <Container bsPrefix="modalBody">
              <label>Payment Success !!!</label>
            </Container>
          </Modal>
           <p id="struk2">upload payment proof</p>
           </div>
            <div>
            <Card id="card_jumbo_invoice4">
           <Row>
            <div id="pembatas"/>
           <Col sm={8}>
             <font id="pembayaran5"><strong>kereta api</strong></font>
             <p id="tanggal">{data?.train?.dateStart}</p>

             <font id="name_train"><strong>Argo wilis</strong></font>
             <p id="type_train">{data?.train?.typeTrain?.name}</p>
             <p id="div4"/>
            <p id="div5"/>
            <p id="div6"/>
             <font id="time_travel"><strong>{data?.train?.startTime}</strong></font>
             <p id="time_travel"><small>{data?.train?.dateStart}</small></p>
             <font id="time_travel"><b>{data?.train?.arrivalTime}</b></font>
             <p id="time_travel"><small>{data?.train?.dateStart}</small></p>

           </Col>
          <Col sm={4}>
               <img alt="barcode" id="barcode" src={qr_code}/>
                <p id="kode">hd027dn </p>
              <font id="kota"><strong>jakrata</strong></font>
             <p id=""><small>{data?.train?.startStation}</small></p>
             <font id=""><strong>surabaya</strong></font>
             <p id=""><small>{data?.train?.destination}</small></p>
           </Col>
           </Row>
          </Card>
            </div>
        </Modal.Body>
      </Modal>
      <Button variant="primary" onClick={this.showModalLogin} id="tombol_cari_kereta2">
        bayar sekarang
      </Button>
    </Fragment>
  );
}
}

const mapDispatchToProps = dispatch => {
  return {
    uploadProof: (formData, id) => dispatch(uploadProof(formData, id))
  }
}
export default connect(null, mapDispatchToProps)(Modal_Bayar);

// export default Modal_Bayar;
