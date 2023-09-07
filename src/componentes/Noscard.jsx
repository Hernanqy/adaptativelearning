import Imgnos1 from "./../../public/imagenes/nos1.jpeg"
import Imgnos2 from "./../../public/imagenes/nos2.jpeg"
import Imgnos3 from "./../../public/imagenes/nos3.jpeg"
import Imgnos4 from "./../../public/imagenes/nos4.jpeg"
import Imgnos7 from "./../../public/imagenes/nos7.jpeg"
import Imgnos8 from "./../../public/imagenes/nos8.jpeg"
import Imgequip from "./../../public/imagenes/equipo1.jpeg"
import "./Nosotrxs.css"
import 'animate.css'
const Noscard = () => {
    return (
        <div>
            
            
            <div className="noscard animate__bounceIn"><h2>Nosotrxs</h2></div>
                
               
                
                <div className="noscard animate__bounceIn ">
                <img className="imgnos" src={Imgnos1} alt="" />
              </div>
                <div className="noscard1 animate__bounceIn ">
                <img className="imgnos" src={Imgequip} alt="" />
                <img className="imgnos" src={Imgnos2} alt="" />
              </div>
                <div className="noscard2 animate__bounceIn ">
                <img className="imgnos" src={Imgnos3} alt="" />
                <img className="imgnos" src={Imgnos4} alt="" />
              </div>
              <div className="noscard1 animate__bounceIn ">
                <img className="imgnos" src={Imgnos7} alt="" />
                <img className="imgnos" src={Imgnos8} alt="" />
              </div>
        </div>
    );
};

export default Noscard;