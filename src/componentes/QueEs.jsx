import ImgQue from "../../public/imagenes/queEs2.jpg"
import ImgQue1 from "../../public/imagenes/queEs1.jpg"
import ImgQue2 from "../../public/imagenes/queEs3.jpg"
import "./QueEs.css"

const QueEs = () => {
    return (
        <div>
            <div className="contenedorQue">
                <img src={ImgQue} alt="" />
                <img src={ImgQue1} alt="" />
                <img src={ImgQue2} alt="" />
                
                
                </div>
        </div>
    );
};

export default QueEs;