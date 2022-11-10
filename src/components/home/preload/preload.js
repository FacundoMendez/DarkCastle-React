import gsap from "gsap";

const efectsPreload = () => {

    let preload = document.querySelector(".preload");  
    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
    },21000)

    gsap.set(".nav",{
        opacity:0,
    })


    let tl = gsap.timeline({
        delay:19,
    });

    tl.to(".preload__video",{  
        opacity:0,
    })

    tl.to(".ball",{
        duration:2, 
        opacity:3,
        'webkitFilter': 'blur(2rem)',
        scale:10,       
    })

    tl.to(".skip p",{        
        delay:-3,
        opacity: 0,
    })

    tl.to(".container",{ 
        delay:-1,
        duration:1.5,       
        opacity:1,
    })

    gsap.to(".container2",{ 
        delay:5,
        duration:1.5,       
        opacity:1,
    })

    tl.to(".nav",{ 
        delay:-1,
        duration:2,
        ease: "back.out(1.7)",
        opacity:1,
    })


    tl.to(".preload",{  
        display:"none"
    })

 
    tl.to(".main",{  
        delay:-1,
        display:"block"
    })


    gsap.to(".skip p",{        
        /* delay:11, */
        display: "inline-block",
        opacity: 1,
    })

     

 

}

export default efectsPreload
