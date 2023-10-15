import React from "react";
import logo from '../../assets/img/Logo.svg';
import Nav from './Nav';

function Header() {
   return (
      <header className="navbar bg-body-tertiary">
         <div className="container">
            <a className="navbar-brand" href="/">
               <img src={logo} alt='Litle Lemon Logo' height="48"></img>
            </a>
           <Nav />
         </div>
      </header>
   );
}

export default Header;