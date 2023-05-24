
import "./Header.css"
import Img1 from "./../../public/imagenes/portadaAdaptative3.png"
import Img2 from "./../../public/imagenes/avatar8.png"


const Header = () => {
    return (
        <div>
            <div className="cuerpo">

                <div className="header1 " >

                    <div className="boximg">

                        <div className="boxImg1" ><img className="img1" src={Img1} alt="" /></div>
                        <div className="parrafo">

                            <div className="contenedor">

                                <div className="title ">
                                    <span>Comienza tu<br/>Aventura</span>
                                </div>
                               
                            </div><a href="./Modulo1"><button className="bg-yellow-500 grow hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Start
                            </button></a>
                        </div>

                        <div className="pantallaGrande"><img className="img2" src={Img2} alt="" /></div>
                    </div>

                </div>
            </div> </div>
    );
};

export default Header;