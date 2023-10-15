import './Nav.css';
function Nav() {
   return (
      <nav>
         <ul className="nav justify-content-center fw-bold color-black">
            <li className="nav-item">
               <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="#">Menu</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="#">Reservations</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="#">Order Online</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="#">Login</a>
            </li>
         </ul>
      </nav>
   );
}

export default Nav;