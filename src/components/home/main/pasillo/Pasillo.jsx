import React, {useEffect} from 'react'
import "./pasillo.css"
import videoCofres from "./src/videos/cofres.mp4"
import pasilloImg from "./src/img/pasilloCastle1.png"
import ojosImg from "./src/img/ojos.png"
import pasilloFuncional from './pasilloFuncional'

const Pasillo = () => {

    useEffect(()=>{
        pasilloFuncional()
    },[])

  return (
        <div id="cofres" className="container3">
            <div className="container3__ojos">
                <img src={ojosImg}alt="OjosBlack"/>
            </div>
            <div className="container3__pasillo">
                <img  src={pasilloImg} alt="Pasillo castillo"/>
            </div>

            <div id="cofres" className="container3__tesoro">
                <video src={videoCofres} autoPlay loop muted type="video/mp4"></video>
            </div>

            <div className="container3__buttons">
                <div className="container3__button-cofre-gris buttonCofre"></div>
                <div className="container3__button-cofre-verde buttonCofre"></div>
                <div className="container3__button-cofre-rojo buttonCofre"></div>
                <div className="container3__button-cofre-diamante buttonCofre"></div>
            </div>
        </div>
    
  )
}

export default Pasillo