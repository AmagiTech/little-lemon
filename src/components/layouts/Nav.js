import React from "react";
import './Nav.css';
function Nav() {
   return (
      <nav>
         <ul className="nav justify-content-center fw-bold color-black">
            <li className="nav-item">
               <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="/menu">Menu</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="/reservations">Reservations</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="/order-online">Order Online</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="/login">Login</a>
            </li>
         </ul>
      </nav>
   );
}

export default Nav;