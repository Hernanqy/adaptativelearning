
import Img11 from "./../../public/imagenes/Avatar12.jpeg"
import "./Hardware.css"

function Pensamiento1() {
  return (
    <div>
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
<iframe width="795" height="690"  src="https://es.educaplay.com/juego/15170160-pensamiento_computacional_para_adolescentes.html" allowfullscreen="true"></iframe>
</div>


</div>
    </div>
  )
}

export default Pensamiento1
