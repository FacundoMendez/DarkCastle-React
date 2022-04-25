import React, {useState, useEffect} from 'react'
import sliderFuncional from './sliderFuncional'
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";
import "./slider.css"

import reaperRuby from "./src/img/3-stars-ruby/Reaper3Stars.png"
import warriorRuby from "./src/img/3-stars-ruby/Sorcerer3Stars.png"
import sorcererRuby from "./src/img/3-stars-ruby/Warrior3Stars.png"

import reaperEsmeralda from "./src/img/3-stars-esmeralda/Reaper3Stars.png"
import warriorEsmeralda  from "./src/img/3-stars-esmeralda/Sorcerer3Stars.png"
import sorcererEsmeralda  from "./src/img/3-stars-esmeralda/Warrior3Stars.png"

import reaperObsidiana from "./src/img/3-stars-obsidiana/Reaper3Stars.png"
import warriorObsidiana from "./src/img/3-stars-obsidiana/Sorcerer3Stars.png"
import sorcererObsidiana from "./src/img/3-stars-obsidiana/Warrior3Stars.png"

import reaperDiamond from "./src/img/3-stars-diamond/Reaper3Stars.png"
import warriorDiamond from "./src/img/3-stars-diamond/Sorcerer3Stars.png"
import sorcererDiamond from "./src/img/3-stars-diamond/Warrior3Stars.png"



const Slider = () => {

    const[id, setId]= useState(1)
    const[characterId, setCharacterId]= useState(1)

    useEffect(()=> {
        sliderFuncional({setCharacterId})
    },[])


  return (
    <div className="wrapper">
        <div className="blur"></div>
        <div className="slider">

            {/* Diamond */}
            <div id="1" className="reaperDiamond slide  ">
                <img src={reaperDiamond} alt="Reaper Diamond" />
            </div>

            <div id="2" className="slide warriorDiamond">
                <img src={warriorDiamond} alt="Warrior Diamond" />
            </div>

            <div id="3" className="slide sorcererDiamond">
                <img src={sorcererDiamond} alt="Sorcerer Diamond" />
            </div>

            {/* Ruby */}
            
            <div id="4" className="slide reaperRuby">
                <img src={reaperRuby} alt="Reaper Ruby" />
            </div>

            <div id="5" className="slide warriorRuby">
                <img src={warriorRuby} alt="Warrior Ruby" />
            </div>

            <div id="6" className="slide sorcererRuby">
                <img src={sorcererRuby} alt="Sorcerer Ruby" />
            </div>
            
            {/* Esmeralda */}

            <div id="7" className="slide reaperEsmeralda">
                <img src={reaperEsmeralda} alt="Reaper Esmeralda" />
            </div>

            <div id="8" className="slide warriorEsmeralda">
                <img src={warriorEsmeralda} alt="Warrior Esmeralda" />
            </div>


            <div id="9" className="slide sorcererEsmeralda">
                <img src={sorcererEsmeralda} alt="Sorcerer Esmeralda" />
            </div>

            {/* Obsidiana */}

            <div id="10" className="slide reaperObsidiana">
                <img src={reaperObsidiana} alt="Reaper Obsidiana" />
            </div>

            <div id="11" className="slide warriorObsidiana">
                <img src={warriorObsidiana} alt="Warrior Obsidiana" />
            </div>

            <div id="12" className="slide sorcererObsidiana">
                <img src={sorcererObsidiana} alt="Sorcerer Obsidiana" />
            </div>

        </div>

        <div className="buttons">
            <span className="button button--next" id="next" onClick={() => setId(characterId-1)}>
                <b className="arrow">            
                    <FaAngleRight />
                </b>
            </span>

            <span className="button button--prev" id="prev" onClick={() => setId(characterId-1)} > 
                <b className="arrow">
                    <FaAngleLeft />
                </b>
            </span>
        </div>

    </div>
  )
}

export default Slider