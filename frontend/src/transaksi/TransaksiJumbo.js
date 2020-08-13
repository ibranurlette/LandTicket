import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table, Card } from "react-bootstrap";
import ModalEdit from "./modal_edit";
import ModalDetail from "./modal_detail";
import Delete from "./modal_delete";
import { connect } from "react-redux";
import { getPayment } from "../client/_action/payment";
// component jumbo untuk manmpikn jumbotron yang kita miliki
class Jumbo extends Component {
  componentDidMount() {
    this.props.getPayment();
  }
  render() {
    const { data } = this.props.payment;
    return (
      <Fragment>
        <Container id="transaksi">
          <p id="list_transaksi">
            <strong>List Transaksi</strong>
          </p>
          <Table responsive>
            <thead>
              <tr>
                <th>no</th>
                <th>user</th>
                <th>ticket</th>
                <th>bukti transafer</th>
                <th>status payment</th>
                <th>action</th>
              </tr>
            </thead>
            {data.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item?.user?.name}</td>
                  <td>
                    {item?.train?.startStation}-{item?.train?.destination}
                  </td>
                  {/*<td >{item.attachment}</td>*/}
                  <td>
                    {item.attachment ? (
                      <Card.Img
                        alt="attachment"
                        style={{ height: "50px", width: "100px" }}
                        src={require(`../Images/${item.attachment}`)}
                      />
                    ) : (
                      <Card.Img
                        alt="attachment"
                        className="admin-attachmentx"
                        style={{ height: "180px" }}
                        src=""
                      />
                    )}
                  </td>
                  <td>{item.status}</td>
                  <td>
                    <div className="mr-2">
                      <ModalDetail data={item} />
                    </div>
                    <div className="mr-2">
                      <ModalEdit id="modal-login" data={item} />
                    </div>
                    <div className="mr-2">
                      <Delete data={item} />
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Container>
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
