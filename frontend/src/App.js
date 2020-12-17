import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/Footer.css";

import "./css/Header.css";

import "./css/Jumbo.css";

import "./css/edit_transaki.css"; /*not yet*/

import "./css/modal_detail.css";

import "./css/modal_beli.css";

import "./css/Modal_bayar.css";

import Header from "./landing/Header1";
import Footer from "./landing/Footer1";
import Jumbo from "./landing/Jumbo1";
import HomeHeader from "./home/HomeHeader";
import TicketHeader from "./ticket/TicketHeader";
import TicketJumbo from "./ticket/TicketJumbo";
import TransaksiJumbo from "./transaksi/TransaksiJumbo";
import AdminHeader from "./adminForm/AdminHeader";
import AdminJumbo from "./adminForm/AdminJumbo";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/transaksi">
            <Transaksi />
          </Route>
          <Route path="/admin">
            <AdminForm />
          </Route>
          <Route path="/ticket">
            <Ticket />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    );
  }
}

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbo />
        <Footer />
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
      </div>
    );
  }
}
class Ticket extends Component {
  render() {
    return (
      <div>
        <TicketHeader />
        <TicketJumbo />
      </div>
    );
  }
}

class Transaksi extends Component {
  render() {
    return (
      <div>
        <TransaksiJumbo />
      </div>
    );
  }
}
class AdminForm extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <AdminJumbo />
      </div>
    );
  }
}

export default App;
