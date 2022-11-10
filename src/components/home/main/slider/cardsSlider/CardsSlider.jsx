import React from 'react'
import arrayCards from './arrayCards'

const CardsSlider = () => {

  return (
    <div className="slider">
        <div className="slide">
            
            {arrayCards.map((index, key) =>{
                return <img className="imgSlider"  src={index.img} alt="background Slider 2"/>
            })}
        
        </div>
    </div>
  )
}

export default CardsSlider