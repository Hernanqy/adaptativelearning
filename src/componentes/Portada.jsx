import Imgportada from "./../../public/imagenes/portada1.png"
import "./Portada.css"

const Portada = () => {
    return (
        <div className="portada-container">
      <div className="portada1">
        <img src={Imgportada} alt="" />
       <button type="button" className="btn btn-primary boton-sobre-imagen btn-lg">Primary</button> 
      </div>
    </div>
    );
}

export default Portada;
