import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiEternalLove } from 'react-icons/gi';

// component Footer untuk menampilkan footer kita
class Footer extends Component {
  render() {
    return (
      <footer className='text-center footer1'>
        <div className='container'>
        	<h1 className="footer2">&#169;2021 You can buy your ticket here</h1>
        	<h6 className="footer3">Made with <GiEternalLove color = 'red'/> by ibra</h6>
        </div>
      </footer>

    )
  }
}
export default Footer;