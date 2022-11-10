import React, {useEffect} from 'react'
import "./pasillo.css"
import pasilloFuncional from './pasilloFuncional'
import enterCofres from './enterCofres/enterCofres'

const Pasillo = () => {

    useEffect(()=>{
        pasilloFuncional()
        enterCofres()
    },[])

  return (
        <div id="cofres" className="container3">
            <div className="container3__ojos">
                <img src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_480,q_auto:eco,w_852/v1668097299/darkCastle/ojos_inqq3u.webp"alt="OjosBlack"/>
            </div>
            <div className="container3__pasillo">
                <img  src="https://res.cloudinary.com/dvrxw8fbg/image/upload/c_scale,h_1513,q_auto:best,w_2771/v1668102279/darkCastle/pasilloCastle_ukjjz3.png" alt="Pasillo castillo"/>
            </div>

            <div id="cofres" className="container3__tesoro">
                <video src="https://res.cloudinary.com/dvrxw8fbg/video/upload/c_scale,h_878,q_auto:best,w_1920/v1668097297/darkCastle/cofres_ykkvzc.mp4" autoPlay loop muted type="video/mp4"></video>
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