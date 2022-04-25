import React, {useEffect, useState} from 'react'
import videoPreload from "./src/videos/precarga2.mp4"
import "./preload.css"
import efectsPreload from './preload'
import videoSkip from './videoskip'
import RayoSkipGsap from './functions/RayoSkipGsap'

const PreloadCarga = () => {
    
    useEffect(()=>{
        efectsPreload()
        videoSkip()
    },[])

    const [videoRayo, setVideoRayo] = useState(false)
    const [videoPrelo, setVideoPrelo] = useState(true)

  return (
    <div className="containerPreload">
        <div className="preload">
            <div className="preload__video">
                {videoPrelo ? <video className="video__animated-preload" src={videoPreload} autoPlay loop muted  type="video/mp4"></video> : null}
                <div className="ball"></div>
            </div>
            <div className="skip" onClick={() => {
                setVideoPrelo(false)
                setVideoRayo(true)}}>

                <p>skip</p>
            </div>
        </div>

        <div className="skip__video" >
            {videoRayo ? <RayoSkipGsap /> : null }
        </div>
        

    </div>
  )
}

export default PreloadCarga