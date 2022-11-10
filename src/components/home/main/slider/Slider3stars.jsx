import React, { lazy, Suspense} from 'react'
import "./slider.css"
import Spinner from '../../preload/spinner/Spinner';

const CardsSlider = lazy(() => import("./cardsSlider/CardsSlider"))


const Slider3Stars = () => {

  return (
    <Suspense fallback={<Spinner/>}>
        <div className="containerSlider">
            <video src="https://res.cloudinary.com/dvrxw8fbg/video/upload/c_scale,h_1080,q_auto:eco,w_1920/v1668047422/darkCastle/relampago_vtfmzr.mp4" autoPlay loop muted  type="video/mp4"></video>

            <div className="wrapper">
                <Suspense fallback={<Spinner/>}>
                    <CardsSlider/>
                </Suspense>
            </div>
        </div>

    </Suspense>
  )
}

export default Slider3Stars