import { Link } from "react-router-dom";
import pixlogo from "../assets/photos/pixlogo.png";
import "../style/navbar.scss";
import 'animate.css';

function Navbar() {
  return (
    <> 
      <nav className="navbar navbar-expand-lg bg-navbar">
        <div className="container-fluid">
          <div className="logo">
            <img src={ pixlogo } alt="Dan-Photo" width="70"/>
          </div>
          <button className="navbar-toggler nav-menu nav-text bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon <GiHamburgerMenu/>"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link animate__animated animate__pulse animate__delay-1s"><span className="nav-text">Home</span></Link>
              </li>
              <li  className="nav-item">
                <Link to="/about" className="nav-link animate__animated animate__pulse animate__delay-1s"><span className="nav-text">About</span></Link>
              </li>
              <li  className="nav-item">
                <Link to="/Project" className="nav-link animate__animated animate__pulse animate__delay-1s"><span className="nav-text">Project</span></Link>
              </li>
              <li  className="nav-item">
                <Link to="/Contact" className="nav-link animate__animated animate__pulse animate__delay-1s"><span className="nav-text">Contact</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar