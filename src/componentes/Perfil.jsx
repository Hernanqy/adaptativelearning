import ImgPerfil1 from "../../public/imagenes/tU PROGRESO.gif"
import ImgNIVELskils from "../../public/imagenes/NIVEL1skils.gif"
import ImgNIVELskils2 from "../../public/imagenes/NIVEL2skils.gif"
import ImgNIVELskils3 from "../../public/imagenes/NIVEL3skils.gif"
import ImgNIVELskils5 from "../../public/imagenes/NIVEL5skils.gif"
import ImgObjetivo from "../../public/imagenes/ObjetivoCumplido.gif"
import "./Perfil.css"
const Perfil = () => {
    return (<>
<div className="contenedorSkills">
        <div className="perfilCont">
            <img src={ImgPerfil1} alt="" />
        </div>
        <div className="perfilCont">
            <img src={ImgNIVELskils} alt="" />
        </div>
        <div className="perfilCont">
            <img src={ImgNIVELskils2} alt="" />
        </div>
        <div className=" perfilCont">
            <img src={ImgNIVELskils3} alt="" />
        </div>
        <div className=" perfilCont">
            <img src={ImgNIVELskils5} alt="" />
        </div>
        <div className="perfilCont">
            <img src={ImgObjetivo} alt="" />
        </div>
        </div>
        </>
    );
};

export default Perfil;