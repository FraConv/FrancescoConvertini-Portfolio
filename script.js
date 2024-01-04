//animazione cambio colore body

window.addEventListener('scroll', () => {

    if(window.scrollY > 1400) {
    
        document.body.classList.remove('scroll-down');
    
    } 
    
    else{document.body.classList.add('scroll-down')};
    
    });


    //animazione loader

    $(window).on("load", function(){
       
        $(".loader-wrapper").fadeOut("slow");

        $(".loader").fadeOut("slow");

        $(".loader2").fadeOut("slow");

     

        })

    