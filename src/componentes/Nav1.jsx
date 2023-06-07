
import { Navbar, Nav, Dropdown, Collapse } from 'bootstrap-4-react';
import videoLogo from "./../../public/imagenes/Logotipo animado 500x500 px.gif"



const Nav1 = () => {
    return (
        <div>
              <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">
        <a href="/" className="flex items-center">
      <img src={videoLogo} className="h-10 mr-3" alt="Flowbite Logo" />
      <div className="spanLogo">
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">SIMON</span>
      <span className="self-center text-1xl font-semibold whitespace-nowrap text-white">Secundarias Profesionales</span>
      </div>
  </a>
  
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav mr="auto">
            <Nav.Item active>
              <Nav.Link href="/">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Elsendero">El Sendero</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Diagnostico">Diagnostico</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Elsendero">Nuestro Sendero</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Diagnostico">Comunidad</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Diagnostico">Perfil</Nav.Link>
            </Nav.Item>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Desafio</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Practica 1</Dropdown.Item>
                <Dropdown.Item>Practica 2</Dropdown.Item>
                <Dropdown.Item>Practica 3</Dropdown.Item>
                <Dropdown.Item>Practica 4</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
            
           
          </Navbar.Nav>
          
        </Collapse>
      </Navbar>
        </div>
    );
}

export default Nav1;
