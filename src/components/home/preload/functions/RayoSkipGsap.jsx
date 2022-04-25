import React, {useEffect} from 'react'
import gsap from "gsap";
import videoRayoSkip from "../src/videos/Rayo.mp4"

const RayoSkipGsap = () => {

    useEffect(()=>{

        let container = document.querySelector(".container")

        container.style.opacity="0";


        gsap.set("body",{
            delay:2,
            backgroundColor:"white"
        })
    
        gsap.to(container,{        
            duration: 3,       
            delay:2.3,
            opacity:1,
        })

        gsap.to(".video__skip-rayo",{        
            duration: 1,            
            delay:1.7,
            opacity:-.5,
            display:"none"
        })
    
        gsap.to("body",{
            delay:1,
            backgroundColor:"black"
        })
    
    
        gsap.to(".nav",{ 
            delay:3.5,
            duration:2,
            ease: "back.out(1.7)",
            opacity:1,
        })

        gsap.set("body",{ 
            delay:5.5,
            backgroundColor:"black",
        })

        gsap.to(".main",{  
            delay:5.5,
            display:"inline-block"
        })

    },[])
   

    return <video className="video__skip-rayo" src={videoRayoSkip} autobuffer="" autoPlay muted  type="video/mp4"></video> 
}

export default RayoSkipGsap;



