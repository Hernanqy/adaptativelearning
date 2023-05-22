
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
               <div className="parrafo"> <div className="container">
               <div className="title grow">
 <h1>Comienza tu Aventura</h1>
</div>
</div><button className="bg-blue-500 grow hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Button
</button>
            </div>

             <div className="pantallaGrande"><img className="img2" src={Img2} alt="" /></div>
               </div>
              
            </div> 
       </div> </div>
    );
};

export default Header;