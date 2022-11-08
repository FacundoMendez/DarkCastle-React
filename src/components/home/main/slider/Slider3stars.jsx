import React, {useState, useEffect, Suspense} from 'react'
import sliderFuncional from './sliderFuncional'
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";
import "./slider.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Spinner from '../../preload/spinner/Spinner';
import '@splidejs/splide/css/sea-green';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';



import reaperRuby2 from "./src/2starsRubi/Reaper2Stars.png"
import warriorRuby2 from "./src/2starsRubi/Sorcerer2Stars.png"
import sorcererRuby2 from "./src/2starsRubi/Warrior2Stars.png"

import reaperEsmeralda2 from "./src/2starsEsmerald/Reaper2StarsPNG.png"
import warriorEsmeralda2  from "./src/2starsEsmerald/Sorcerer2StarsPNG.png"
import sorcererEsmeralda2  from "./src/2starsEsmerald/Warrior2Stars.png"

import reaperObsidiana2 from "./src/2starsObsidian/Reaper2StarsPNG.png"
import warriorObsidiana2 from "./src/2starsObsidian/Sorcerer2StarsPNG.png"
import sorcererObsidiana2 from "./src/2starsObsidian/Warrior2StarsPNG.png"

import reaperDiamond2 from "./src/2starsDiamante/Reaper2Stars.png"
import warriorDiamond2 from "./src/2starsDiamante/Sorcerer2Stars.png"
import sorcererDiamond2 from "./src/2starsDiamante/Warrior2Stars.png"



import reaperRuby1 from "./src/1starRubi/Reaper1Star.png"
import warriorRuby1 from "./src/1starRubi/Sorcerer1Star.png"
import sorcererRuby1 from "./src/1starRubi/Warrior1Star.png"

import reaperEsmeralda1 from "./src/1starEsmerald/Reaper1StarPNG.png"
import warriorEsmeralda1  from "./src/1starEsmerald/Sorcerer1StarPNG.png"
import sorcererEsmeralda1  from "./src/1starEsmerald/Warrior1Star.png"

import reaperObsidiana1 from "./src/1starsObsidian/Reaper1StarPNG.png"
import warriorObsidiana1 from "./src/1starsObsidian/Sorcerer1StarsPNG.png"
import sorcererObsidiana1 from "./src/1starsObsidian/Warrior1StarPNG.png"

import reaperDiamond1 from "./src/1starDiamante/Reaper1Star.png"
import warriorDiamond1 from "./src/1starDiamante/Sorcerer1Star.png"
import sorcererDiamond1 from "./src/1starDiamante/Warrior1Star.png"


import reaperRuby3 from "./src/3starsRubi/Reaper3Stars.png"
import warriorRuby3 from "./src/3starsRubi/Sorcerer3Stars.png"
import sorcererRuby3 from "./src/3starsRubi/Warrior3Stars.png"

import reaperEsmeralda3 from "./src/3starsEsmerald/Reaper3Stars.png"
import warriorEsmeralda3  from "./src/3starsEsmerald/Sorcerer3Stars.png"
import sorcererEsmeralda3  from "./src/3starsEsmerald/Warrior3Stars.png"

import reaperObsidiana3 from "./src/3starsObsidian/Reaper3Stars.png"
import warriorObsidiana3 from "./src/3starsObsidian/Sorcerer3Stars.png"
import sorcererObsidiana3 from "./src/3starsObsidian/Warrior3Stars.png"

import reaperDiamond3 from "./src/3starsDiamante/Reaper3Stars.png"
import warriorDiamond3 from "./src/3starsDiamante/Sorcerer3Stars.png"
import sorcererDiamond3 from "./src/3starsDiamante/Warrior3Stars.png"



const Slider3Stars = () => {

   
  return (


    <Suspense fallback={<Spinner/>}>


<Splide className='sliderCards'
      options={{
        type: "loop",
        gap: "0",
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 3,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 1
        }
      }}
      extensions={{ AutoScroll }}
    >
        <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={reaperRuby3} alt="background Slider 2"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={warriorRuby3} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={sorcererRuby3} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>
        
          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={reaperEsmeralda3} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>
        
          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={warriorEsmeralda3} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={sorcererEsmeralda3} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={reaperObsidiana3} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={warriorObsidiana3} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={sorcererObsidiana3} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>



          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={reaperDiamond3} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={warriorDiamond3} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={sorcererDiamond3} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>




          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={reaperRuby2} alt="background Slider 2"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={warriorRuby2} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={sorcererRuby2} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>
        
          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={reaperEsmeralda2} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>
        
          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={warriorEsmeralda2} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={sorcererEsmeralda2} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={reaperObsidiana2} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={warriorObsidiana2} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={sorcererObsidiana2} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>



          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={reaperDiamond2} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={warriorDiamond2} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={sorcererDiamond2} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>




          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={reaperRuby1} alt="background Slider 2"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={warriorRuby1} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={sorcererRuby1} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>
        
          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={reaperEsmeralda1} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>
        
          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={warriorEsmeralda1} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={sorcererEsmeralda1} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={reaperObsidiana1} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={warriorObsidiana1} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={sorcererObsidiana1} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>



          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={reaperDiamond1} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={warriorDiamond1} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

          <SplideSlide>
            <Suspense fallback={<Spinner/>}>
              <img className="imgSlider" src={sorcererDiamond1} alt="background Slider 3"/>
            </Suspense>
          </SplideSlide>

    </Splide>


    </Suspense>
  )
}

export default Slider3Stars