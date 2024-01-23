import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components.css';
import images from '../../resources/images/images';
import { Link } from 'react-router-dom';
function navbar() {
  return (
    <Navbar expand="lg" id="nav" >
      <Container className="navcontainer">
        <Navbar.Brand href="#home" className="text-light text-decoration-none fs-3"><img src={images.navlogo} alt="logo" width="60"/>Tanks Of Llamosa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-light" id="navbarPosition">
            <Link style={{textDecoration: 'none'}} to="/"><Nav.Link className="text-light" href="#home">Home</Nav.Link></Link>
            <Nav.Link className="text-light"href="#link">About me</Nav.Link>
            <NavDropdown title={<span className="text-light my-auto">Players</span>} id="basic-nav-dropdown">
              <Link style={{textDecoration: 'none'}}to="/players"><NavDropdown.Item href="#action/3.2">Players list</NavDropdown.Item></Link>
              <NavDropdown.Item href="#action/3.3">Top Players</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Clans</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span className="text-light my-auto">Tanks</span>} id="basic-nav-dropdown">
              <Link style={{textDecoration: 'none'}}to="/tanks"><NavDropdown.Item href="#action/3.2">List of tanks</NavDropdown.Item></Link>
              <NavDropdown.Item href="#action/3.3">Tank Components</NavDropdown.Item>
              <Link style={{textDecoration: 'none'}}to="/badges"><NavDropdown.Item href="#action/3.3">Badges</NavDropdown.Item></Link>
              <NavDropdown.Item href="#action/3.3">Crew SKills</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span className="text-light my-auto">Equipment and more</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Modules</NavDropdown.Item>
              <Link style={{textDecoration: 'none'}}to="/maps"><NavDropdown.Item href="#action/3.3">Maps</NavDropdown.Item></Link>
              <NavDropdown.Item href="#action/3.3">Consumables</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Personal Missions</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Personal Reserves</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;