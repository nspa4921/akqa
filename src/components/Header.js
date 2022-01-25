import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import logo from '../images/DermaWorld.png';

function Header(props) {
  return (
    <div className="header">
      <div className="logo">
        <a href="#"><img src={logo} alt="logo"/></a>
      </div>
        <div>
            <form>
            <input className="search" type="search" placeholder="Search" />
            </form>
        </div>
    </div>
  );
}

export default Header;