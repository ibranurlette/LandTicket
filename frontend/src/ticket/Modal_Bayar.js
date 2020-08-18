import React, { Component, Fragment } from "react";
import {
  Button,
  Modal,
  Row,
  Col,
  Form,
  Card,
  Container,
} from "react-bootstrap";
import { TiWarningOutline } from "react-icons/ti";
import { connect } from "react-redux";
import qr_code from "../img/qr.png";
import { uploadProof } from "../client/_action/upload";
class Modal_Bayar extends Component {
  state = {
    show: false,
    modal_sukses: false,
    file: null,
    preview: null,
    modal_gagal: false,
  };
  // componentDidMount() {

  // }

  hideModalBayarTicket = () => {
    let hideModal = this.setState({ show: false });
    setInterval(hideModal, 500);
  };
  showModalBayarTicket = () => {
    this.setState({ show: true });
  };

  hadlePay = (file) => {
    const id = this.props.data.id;
    if (file) {
      const formData = new FormData();
      formData.append("payment", file);
      this.props.uploadProof(formData, id);
      this.setState({
        modal_sukses: true,
      });
    } else {
      this.setState({
        modal_gagal: true,
      });
    }
  };
  render() {
    const data = this.props.data;
    const { file } = this.state;
    return (
      <Fragment>
        <Modal
          size="xl"
          show={this.state.show}
          onHide={this.hideModalBayarTicket}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton id="example-modal-sizes-title-lg">
            <Modal.Title>Pembayaran</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Card>
                  <TiWarningOutline id="warning" />
                  <p id="pembayaran">
                    Silhkan lakukan pembayaran melalui m banking, e-bangking,
                    dan atm ke no rek yang tertera
                  </p>
                  <p id="pembayaran2">9830479205724</p>
                </Card>
                <Card className="mt-2">
                  <Card.Header>Tiket saya</Card.Header>
                  <Container>
                    <Form>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <p>
                            <strong>Nama</strong>
                          </p>
                          <p>{data?.user?.name}</p>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <p>
                            <strong>Pemesan</strong>
                          </p>
                          <p>{data?.user?.username}</p>
                        </Form.Group>

                        <Form.Group as={Col}>
                          <p>
                            <strong>Handphone</strong>
                          </p>
                          <p>{data?.user?.phone}</p>
                        </Form.Group>

                        <Form.Group as={Col}>
                          <p>
                            <strong>Email</strong>
                          </p>
                          <p>{data?.user?.email}</p>
                        </Form.Group>
                      </Form.Row>
                    </Form>
                  </Container>
                </Card>
              </Col>
              <Col sm={6}>
                <Card className="mt-2">
                  <Row>
                    <Col xs={6}>
                      <h2>
                        <strong>Kereta Api</strong>
                      </h2>
                      <div className="ml-4">
                        <h4>
                          <strong>{data?.train?.nameTrain}</strong>
                        </h4>
                        <p>{data?.train?.typeTrain?.name}</p>
                      </div>
                      <p id="div4" />
                      <p id="div5" />
                      <p id="div6" />
                      <div className="ml-5">
                        <font>
                          <strong>{data?.train?.startTime}</strong>
                        </font>
                        <p>
                          <small>{data?.train?.dateStart}</small>
                        </p>
                        <font>
                          <b>{data?.train?.arrivalTime}</b>
                        </font>
                        <p>
                          <small>{data?.train?.dateStart}</small>
                        </p>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div className="text-center">
                        <img alt="barcode" id="barcode" src={qr_code} />
                        <p>hd027dn </p>
                      </div>
                      <div style={{}}>
                        <font>
                          <strong>Jakrata</strong>
                        </font>
                        <p>
                          <small>{data?.train?.startStation}</small>
                        </p>
                        <font>
                          <strong>Surabaya</strong>
                        </font>
                        <p>
                          <small>{data?.train?.destination}</small>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            <div className="mt-2">
              <h3>Rincian Harga</h3>
              <Card className="container">
                <Row>
                  <Col xs={6}>
                    <p>
                      <strong>{data?.train?.namaTrain}</strong>
                    </p>
                    <p>
                      <strong>Nama Kereta</strong>
                    </p>
                    <p>
                      <strong>Total Pembayaran</strong>
                    </p>
                  </Col>
                  <Col xs={6}>
                    <p>{data?.train?.nameTrain}</p>
                    <p>{data.Total_price}</p>
                  </Col>
                </Row>
              </Card>
              <Row>
                <Col xs={4}>
                  <Button
                    type="submit"
                    variant="warning"
                    className="mt-2"
                    onClick={() => this.hadlePay(file)}
                  >
                    Bayar Sekarang
                  </Button>
                </Col>
                <Col xs={8}>
                  <img
                    src={this.state.preview}
                    id="preview_image"
                    alt="preview"
                  ></img>
                  <form encType="multipart/form-data" className="mt-4">
                    <input
                      className="invoice-choose-file"
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      name="payment"
                      onChange={(e) => {
                        this.setState({
                          file: e.target.files[0],
                          preview: URL.createObjectURL(e.target.files[0]),
                        });
                      }}
                    />
                  </form>

                  <p>Upload Bukti Pembayaran</p>
                </Col>
              </Row>
              <Modal
                className="fontx"
                size="sm"
                show={this.state.modal_sukses}
                onHide={() =>
                  this.setState({
                    modal_sukses: false,
                  })
                }
              >
                <Container bsPrefix="modalBody">
                  <label>Pembayaran Berhasil !!!</label>
                </Container>
              </Modal>
            </div>
          </Modal.Body>
        </Modal>
        <Button
          variant="warning"
          style={{ marginTop: "70px" }}
          onClick={this.showModalBayarTicket}
        >
          Checkout
        </Button>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadProof: (formData, id) => dispatch(uploadProof(formData, id)),
  };
};
export default connect(null, mapDispatchToProps)(Modal_Bayar);

// export default Modal_Bayar;
