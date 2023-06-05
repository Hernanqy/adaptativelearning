
import Img10 from "./../../public/imagenes/avatar10.jpeg"
import Img11 from "./../../public/imagenes/Avatar12.jpeg"
import "./Hardware.css"

const Utilitarios = () => {
    return (

        <div>


<div className="container">
  <svg viewBox="0 0 960 300">
    <symbol id="s-text">
      <text textAnchor="middle" x="50%" y="80%">DESAFIO 2</text>
    </symbol>

    <g className = "g-ants">
      <use xlinkHref="#s-text" className="text-copy"></use>
      <use xlinkHref="#s-text" className="text-copy"></use>
      <use xlinkHref="#s-text" className="text-copy"></use>
      <use xlinkHref="#s-text" className="text-copy"></use>
      <use xlinkHref="#s-text" className="text-copy"></use>
    </g>
  </svg>
</div>

            <div className="contenedorVideo">

                <div>

                    

                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Img10} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Juego de Reconocimineto Excel</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">El objetivo de este juego es reconocer y ubicar las diferentes partes del entorno de Excel.Conecta cada parte segun corresponda y envia la respuesta.</p>
                        </div>
                    </a>

                </div>

                <div>
                <iframe  src="https://wordwall.net/es/embed/4968cf34f5a84746b5f9faaef88f5396?themeId=1&templateId=22&fontStackId=0" width="500" height="380"  allowfullscreen="true"></iframe>
                </div>


            </div>
            

            <div className="contenedorVideo">

                <div>

                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Img11} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reconociendo partes de Word</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Reconoce y conecta las partes de la pantalla de inicio de Word.</p>
                    </div>
                </a>

            </div>

                <div>
                <iframe  src="https://wordwall.net/es/embed/8ece7cd37d134cc98f9a8595779d4e1c?themeId=1&templateId=22&fontStackId=0" width="500" height="380"  allowfullscreen="true"></iframe>
                
            </div>

            
        </div>

















          

        </div>
    );
};

export default Utilitarios;