import Imgnos1 from "./../../public/imagenes/nos1.jpeg"
import Imgnos2 from "./../../public/imagenes/nos2.jpeg"
import Imgnos3 from "./../../public/imagenes/nos3.jpeg"
import Imgnos4 from "./../../public/imagenes/nos4.jpeg"
import Imgequip from "./../../public/imagenes/equipo1.jpeg"
import "./Nosotrxs.css"
import 'animate.css'
const Noscard = () => {
    return (
        <div>
            
            
            <div className="noscard animate__bounceIn"><h2>Nosotrxs</h2></div>
                
               
                
                <div className="noscard animate__bounceIn ">
                <img src={Imgnos1} alt="" />
              </div>
                <div className="noscard1 animate__bounceIn ">
                <img src={Imgequip} alt="" />
                <img src={Imgnos2} alt="" />
              </div>
        </div>
    );
};

export default Noscard;