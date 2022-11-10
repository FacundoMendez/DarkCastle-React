import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger'


const pasilloFuncional = () => {
    const container3 = document.querySelector(".container3")
    const container3Pasillo = document.querySelector(".container3__pasillo")
    const container3Tesoro = document.querySelector(".container3__tesoro")
    const container3__ojos = document.querySelector(".container3__ojos")
    const container3__buttons = document.querySelector(".container3__buttons")
    const buttonCofre = document.querySelector(".buttonCofre")

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(container3Pasillo,{
        opacity:1,
        scale:8.2,
    })

    gsap.set(container3Tesoro,{
        opacity:0,
        scale:30
    })

    gsap.set(container3__ojos,{
        opacity:0,
        webkitFilter:"blur(3px)",
        scale:1
    })

    gsap.set(container3__buttons,{
        opacity:0,
        scale:1
    })

    gsap.timeline({
        scrollTrigger:{
            trigger:container3,
            pin:container3,
            scrub:1.8,
            end:"+430%"
        }
    })


    .to(container3Pasillo,{
        duration:20,
        scale:"-=7.2",
    })

    .to(container3__ojos,{
        opacity:1,
        duration:5,
    })



    .to(container3Pasillo,{
        webkitFilter:"blur(5px)"
    })

    .to(container3Tesoro,{
        duration:20,
        scale:1,
        opacity:1
    })
    .to(container3__buttons,{
        duration:.1,
        scale:1,
        opacity:1,
    })

    .to(container3__buttons,{
        duration:.1,
        scale:1,
        opacity:1,
    })

    .to(buttonCofre,{
        delay:-1,
        display:"inline-block",
    })


/*  .to(".container4",{
        delay:10
    }) */
    .to(container3,{
        opacity:0,
        duration:10,
    })
}

export default pasilloFuncional