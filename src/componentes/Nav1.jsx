
import { Navbar, Nav, Dropdown, Collapse } from 'bootstrap-4-react';
import logoPrometeo from "./../../public/imagenes/logoPrometeo.png"
import Imghome from "./../../public/imagenes/Imghome.png"
import ImgPath2 from "./../../public/imagenes/ImgPath2.png"
import ImgDiagnostico from "./../../public/imagenes/ImgDiagnostico.png"
import ImgComunidad from "./../../public/imagenes/ImgComunidad.png"
import ImgDesafio from "./../../public/imagenes/ImgDesafio.png"
import ImgPerfil1 from "./../../public/imagenes/ImgPerfil1.png"


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

            <Nav.Item  className="spanperfil" >
              <Nav.Link  href="/"><img src={Imghome} alt="" className='Imgpath' /><span>Inicio</span></Nav.Link>
            </Nav.Item>

            <Nav.Item className="spanperfil">
              <Nav.Link href="/Elsendero"><img src={ImgPath2} alt="" className='Imgpath' /><span>Sendero</span></Nav.Link>
            </Nav.Item>

            <Nav.Item className="spanperfil">
              <Nav.Link href="/Diagnostico"><img src={ImgDiagnostico} alt="" className='Imgpath' /><span>Diagnostico</span></Nav.Link>
            </Nav.Item>
            
            <Nav.Item className ="spanperfil">
              <Nav.Link href="/Comunidadedu"><img src={ImgComunidad} alt="" className='Imgpath' /><span>Comunidad</span></Nav.Link>
            </Nav.Item>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle><img src={ImgDesafio} alt="" className='Imgpath' /><span>Desafios</span></Nav.Link>
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
                <Dropdown.Item className="spanperfil">
                    <li>
                    <a href="./Modulo4" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Practica 4</a>
                  </li>
                  </Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
            
            <Nav.Item className="spanperfil">
              <Nav.Link href="/Diagnostico"><img src={ImgPerfil1} alt="" className='Imgpath' /><span>Perfil</span></Nav.Link>
            </Nav.Item>
            
           
          </Navbar.Nav>
          
        </Collapse>
      </Navbar>
        </div>
    );
}

export default Nav1;
