$(document).ready(function(){
    $(window).scroll(function(){
        var windowWidth = $(window).width();
        
        if(windowWidth > 800) {
            var scroll = $(window).scrollTop();

            $("header .textos").css({
                "transform": "translate(0px, " + scroll/3 + "%)" // scroll devuelve el valor de la posicion de la pantalla, % es para trabajar con porcentajes y no pixeles
            });

            $(".acerca-de article").css({
                "transform": "translate(0px, -" + scroll/8 + "%)" 
            });
        }
    });

    $(window).resize(function(){ //Codigo para reestablecer los parametros de la pagina para pantallas menores a 800px 
        var windowWidth = $(window).width();

        if(windowWidth < 800) {
            var scroll = $(window).scrollTop();

            $(".acerca-de article").css({
                "transform": "translate(0px, 0px)" 
            });
        }
    });
});