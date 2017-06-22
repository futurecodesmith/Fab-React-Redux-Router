import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/fab-logo.png';


const NavBar = () => (

  <nav className="navbar">
    <ul className="nav-ul">
      <li className="link-left"><Link className="link" to={"/"}><img className="img-responsive logo" src={Logo}></img></Link></li>
      <li className="link-right" ><Link className="link" to={"/about"}>Community</Link></li>
      <li className="link-right" ><Link className="link" to={"/cart"}>Login</Link></li>
    </ul>
  </nav>



)

export default NavBar;