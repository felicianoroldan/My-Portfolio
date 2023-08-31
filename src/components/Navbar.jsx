import pixlogo from "../assets/photos/pixlogo.png";
import "../style/navbar.scss";
import 'animate.css';

function Navbar() {
  return (
    <> 
      <nav className="navbar navbar-expand-lg bg-navbar">
        <div className="container-fluid">
          <div className="logo">
            <img src={ pixlogo } alt="Dan-Photo" width="50"/>
          </div>
          <button className="navbar-toggler nav-menu nav-text " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon <GiHamburgerMenu/>"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-menu">
              <li className="nav-item">
                <a className="nav-link animate__animated animate__pulse animate__delay-1s " aria-current="page" href="#"><span className="nav-text">Home</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link animate__animated animate__pulse animate__delay-1s" href="#"><span className="nav-text">About</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link animate__animated animate__pulse animate__delay-1s" href="#"><span className="nav-text">Project</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link animate__animated animate__pulse animate__delay-1s" href="#"><span className="nav-text">Contact</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar