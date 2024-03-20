import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Header.css";

const Header = () => {
  return (
    <div className="">
      <Navbar className="bg-dark px-5" expand="lg">
        <Navbar.Brand
          href="#"
          
        >
          <div className="d-flex align-items-center justify-content-center gap-2">
          <img style={{ width: "20px" }} src={logo} alt="" />
          <h5 className="text-light fs-4 mb-0">Canvix</h5>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          className="text-light bg-light"
          aria-controls="basic-navbar-nav"
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="navitem" className="mx-auto">
            <Nav.Link as={Link} to="/" id="link" className="text-light fs-6">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              id="link"
              className="text-light fs-6"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/project"
              id="link"
              className="text-light fs-6"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              id="link"
              className="text-light fs-6"
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <button id="getBtn" className="m-2 p-2 rounded-pill">Get in Touch</button>
        </Navbar.Collapse>
        
      </Navbar>
    </div>
  );
};

export default Header;
