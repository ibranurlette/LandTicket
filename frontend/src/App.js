import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './css/Footer.css';
import './css/Header.css';
import './css/Jumbo.css';
import './css/Modal_login.css';
import './css/Modal_register.css';
import './css/edit_transaki.css';
import './css/modal_detail.css';
import Header from './landing/Header1';
import Footer from './landing/Footer1';
import Jumbo from './landing/Jumbo1';

import HomeHeader from './home/HomeHeader';
import HomeFooter from './home/HomeFooter';
import HomeJumbo from './home/HomeJumbo';

import TicketHeader from './ticket/TicketHeader';
import TicketJumbo from './ticket/TicketJumbo';


import InvoiceHeader from './invoice/InvoiceHeader';
import InvoiceJumbo from './invoice/InvoiceJumbo';


import TransaksiHeader from './transaksi/TransaksiHeader';
import TransaksiJumbo from './transaksi/TransaksiJumbo';

import AdminHeader from './adminForm/AdminHeader';
import AdminJumbo from './adminForm/AdminJumbo';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
class App extends Component {
   render() {
    // const {authenticated} = this.props.auth;
    return (
<Router >
  <Switch >
      <Route path = "/admin" >
       <AdminForm/>
      </Route>
      <Route path = "/transaksi" >
       <Transaksi/>
      </Route>
       <Route path = "/invoice" >
       <Invoice/>
      </Route>
      <Route path = "/ticket" >
       <Ticket/>
      </Route>
      <Route path = "/home" >
      	<Home />
      </Route>
      <Route path = "/" >
      <Landing/>
      </Route>
  </Switch>
</Router>
    )
  }
}

class Landing extends Component {
  render() {
    return (
      <div className = "app-body" >
      <Header />
      <Jumbo />
      <Footer />
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
      <HomeHeader />
      <HomeJumbo />
      <HomeFooter />
      </div>
    )
  }
}
class Ticket extends Component {
  render() {
    return (
      <div>
      <TicketHeader />
      <TicketJumbo />
      </div>
    )
  }
}

class Invoice extends Component {
  render() {
    return (
      <div>
      <InvoiceHeader />
      <InvoiceJumbo />
      </div>
    )
  }
}


class Transaksi extends Component {
  render() {
    return (
      <div>
      <TransaksiHeader />
      <TransaksiJumbo />
      </div>
    )
  }
}
class AdminForm extends Component {
  render() {
    return (
      <div>
      <AdminHeader/>
      <AdminJumbo />
      </div>
    )
  }
}


export default App;
