
import "./Header.css"
import Img1 from "./../../public/imagenes/portadaAdaptative.png"

const Header = () => {
    return (
        <div>
           <div className="header1">
            <div className="boximg">
               <div><img src={Img1} alt="" /></div> 
               
            </div>
            </div> 
        </div>
    );
};

export default Header;