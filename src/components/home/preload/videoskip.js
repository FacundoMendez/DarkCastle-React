
const videoSkip = () =>{
    let skip = document.querySelector(".skip");
    let video = document.querySelector(".preload");
    
    skip.addEventListener("click", function(){
        video.style.display= "none"
    });
}


export default videoSkip