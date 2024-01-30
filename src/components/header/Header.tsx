import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; 

function Header() {
  return (
    <Navbar expand="lg" className="" style={{backgroundColor: '#81B622'}}  data-bs-theme="dark" fixed="top">
      <Container > 
                <Navbar.Brand href="#home" className="text-white fw-bold">Learn by doing</Navbar.Brand>
        
                <Navbar.Toggle aria-controls="basic-navbar-nav "/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto "> 
                        <Nav.Link href="/#home" className="text-white border-bottom border-white">
                           Home 
                        </Nav.Link>
                        <Nav.Link href="/#about-us" className="text-white">Sobre nosotros</Nav.Link>
                        <NavDropdown title={<span className="text-white" >Servicios</span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/#for-students">Estudiante</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/#for-teachers">
                            Profesor
                        </NavDropdown.Item>
                         <NavDropdown.Divider />
                        <NavDropdown.Item href="/#for-business">
                            For Business
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>   
      </Container>
    </Navbar>
  );
}

export default Header;