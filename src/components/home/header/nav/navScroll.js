import $ from "jquery"

const navScroll = ()=>{
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $(".main").offset();
        contenido2 = contenido2.top;
        if(windowHeight <= contenido2  ){
            /* $(".nav").fadeIn(500); */
            $(".nav").css("top", "-0rem");
            $(".nav").hover(function(){
                $(".nav").css("top", "0rem");
            })
        }else{
        /*   $(".nav").fadeOut(500); */
            $(".nav").css("top", "-24.5rem");
        }
    });
}

export default navScroll