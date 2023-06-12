import "./ElSendero.css"
import ImgConector1 from "../../public/imagenes/ImgConector1.png"

function ElSendero() {
  return (
    < > 
      
      <div className="contenedorSendero">
      <div ><iframe title="EL SENDERO <>"  width="600" height="375" src="https://view.genial.ly/647d19d1fe2cb500128d3df3" type="text/html" allowfullscreen="true" ></iframe> </div> 
      <div><img src={ImgConector1} alt="" /></div>
      <div ><iframe title="nivel 2"  width="600" height="375"  src="https://view.genial.ly/6484dcf7509133001b99b181" type="text/html"  allowfullscreen="true" ></iframe> </div> 
   </div>
      <div className="contenedorSendero">
      <div > <iframe title="nivel 3"  width="600" height="375"  src="https://view.genial.ly/6484dcf7509133001b99b181" type="text/html"  allowfullscreen="true" ></iframe></div> 
      <div><img src={ImgConector1} alt="" /></div>
      <div ><iframe title="nivel 2"  width="600" height="375"  src="https://view.genial.ly/6484dcf7509133001b99b181" type="text/html"  allowfullscreen="true" ></iframe> </div> 
   </div>
   
   
    </>
  )
}

export default ElSendero
