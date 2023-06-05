import Img10 from "./../../public/imagenes/avatar10.jpeg"
import Img11 from "./../../public/imagenes/avatar11.jpeg"
import "./Hardware.css"
const Hardware = () => {
    return (
        <div>
            <div className="container">
  <svg viewBox="0 0 960 300">
    <symbol id="s-text">
      <text textAnchor="middle" x="50%" y="80%">DESAFIO 1</text>
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
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Juego de pares iguales</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">El objetivo de este juego es memorizar la ubicacion de las cartas y hace coincidir a cada una con su par.</p>
                        </div>
                    </a>

                </div>

                <div>
                    <iframe src="https://wordwall.net/es/embed/98e9458431134a06b5c4f7fef9202644?themeId=23&templateId=25&fontStackId=0" width="500" height="380" allowfullscreen="true"></iframe>
                </div>


            </div>

            <div className="contenedorVideo">

                <div>

                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Img11} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Anagrama</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Desifra la palabra oculta moviendo las letras de lugar.</p>
                    </div>
                </a>

            </div>

                <div>
                <iframe src="https://wordwall.net/es/embed/98e9458431134a06b5c4f7fef9202644?themeId=23&templateId=38&fontStackId=0" width="500" height="380" allowfullscreen="true"></iframe>
            </div>

            
        </div>

            <div className="contenedorVideo">

                <div>

                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Img11} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Anagrama</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Desifra la palabra oculta moviendo las letras de lugar.</p>
                    </div>
                </a>

            </div>

                <div>
                <iframe src="https://wordwall.net/es/embed/1105938556014365a696f6978f4e072c?themeId=21&templateId=69&fontStackId=0" width="500" height="380" allowfullscreen="true"></iframe>
            </div>

            
        </div>
            

        </div >
    );
};

export default Hardware;