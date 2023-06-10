
import { Navbar, Nav, Dropdown, Collapse } from 'bootstrap-4-react';
import logoPrometeo from "./../../public/imagenes/logoPrometeo.png"

import "./Nav1.css"


const Nav1 = () => {
    return (
        <div>
              <Navbar expand="lg" light bg="transparent" >
        <Navbar.Brand href="#">
        <a href="/" className="flex items-center">
      <img src={logoPrometeo} className="logoPrometeo mr-3" alt="Flowbite Logo" />
      <div className="spanLogo">
    
      <div><span className="self-center text-1xl font-semibold  text-black">ESCUELAS PROFESIONALES SECUNDARIAS</span></div>
      </div>
  </a>
  
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent" className="barranav">
          <Navbar.Nav mr="auto"  >
            <Nav.Item active >
              <Nav.Link href="/">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Elsendero">El Sendero</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Diagnostico">Diagnostico</Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link href="/Diagnostico">Comunidad</Nav.Link>
            </Nav.Item>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Desafio</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>
                     <li>
                    <a href="./Modulo1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Practica 1</a>
                  </li>
                  </Dropdown.Item>
                <Dropdown.Item>
                    <li>
                    <a href="./Modulo2" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Practica 2</a>
                  </li></Dropdown.Item>
                <Dropdown.Item>
                    <li>
                    <a href="./Modulo3" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Practica 3</a>
                  </li>
                  </Dropdown.Item>
                <Dropdown.Item>
                    <li>
                    <a href="./Modulo4" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Practica 4</a>
                  </li>
                  </Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link href="/Diagnostico">Perfil</Nav.Link>
            </Nav.Item>
            
           
          </Navbar.Nav>
          
        </Collapse>
      </Navbar>
        </div>
    );
}

export default Nav1;
