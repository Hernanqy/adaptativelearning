import "./ElSendero.css"
import ImghHabilidades from "../../public/imagenes/NIVEL1.jpg"
import ImghHabilidades1 from "../../public/imagenes/NIVEL2.jpg"
import ImghHabilidades2 from "../../public/imagenes/NIVEL3.jpg"
import ImghHabilidades3 from "../../public/imagenes/NIVEL4.jpg"
import Imgpersonaje1 from "../../public/imagenes/Imgpersonaje1.png"
import Imgpersonaje2 from "../../public/imagenes/Imgpersonaje2.png"
import Imgpersonaje3 from "../../public/imagenes/Imgpersonaje3.png"
import Imgpersonaje4 from "../../public/imagenes/Imgpersonaje4.png"

function ElSendero() {
  return (
    < > 
      
      <div className="contenedorSendero" >
      
        <img className="poster" src={ImghHabilidades} alt="" />
        <img className="Imgpersonaje1" src={Imgpersonaje1} alt="" />
      </div>




      <div className="contenedorSendero1" >
      <img className="Imgpersonaje1" src={Imgpersonaje2} alt="" />
        <img className="poster" src={ImghHabilidades1} alt="" />
      </div>


      <div className="contenedorSendero2" >
      
        <img className="poster" src={ImghHabilidades2} alt="" />
        <img className="Imgpersonaje1" src={Imgpersonaje3} alt="" />
      </div>


      <div className="contenedorSendero" >
      <img className="Imgpersonaje1" src={Imgpersonaje4} alt="" />
        <img className="poster" src={ImghHabilidades3} alt="" />
      </div>
     
     
   
     
   
   
    </>
  )
}

export default ElSendero
