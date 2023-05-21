
import "./Header.css"
import Img1 from "./../../public/imagenes/portadaAdaptative3.png"


const Header = () => {
    return (
        <div>
           <div className="header1">
            <div className="boximg">
               <div><img src={Img1} alt="" /></div> 
               <div className="parrafo"><p>QUE COMIENCE LA AVENTURA</p><button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Button
</button>
            </div>
               </div>
            </div> 
        </div>
    );
};

export default Header;