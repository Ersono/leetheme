
/* Funciones para el menú colapsado y desplegable con pantalla movil*/
$(function() {
    var pull = $('#pull');
    menu = $('nav.navigation');

        $(pull).click(function() {
        menu.slideToggle();

    });
});
 
$(window).resize(function(){

    var w = $(window).width();

        if(w > 480 ) {
        menu.removeAttr('style');
    }
});


/* Funciones para el parallax del menú */
$(window).scroll(function() {    
    posicionarMenu();
});

function posicionarMenu() {

    var anchopantalla = $(window).width();

    if (anchopantalla > 480){


    if ($(window).scrollTop() >= 80 ){
        
       $("nav.navigation").css({
        "position" : "fixed",
        "z-index" : "20",
        "background-color" : "#fff",
        "width" : "100%",
        "transition-duration" : "0.3s",
       });

    } else {

        $("nav.navigation").css({
        "position" : "relative",
        "background-color" : "transparent",
        "width" : "90%",
        "transition-duration" : "0.7s",
       });
        
    }

}
}


/*Funciones para el efecto Parallax de la marquesian*/
$(document).ready(function(){

    $pantalla = $(window);

    $('.marquesina').each(function(){
        var $this = $(this);
        $pantalla.scroll(function() {
            var y = -($pantalla.scrollTop() / $this.data('movimiento')); 
            var xy = '50% '+ y + 'px';
            $this.css({ backgroundPosition: xy });
       });
    });

});


/*Funcion de llamada para el Slider pgw*/
$(document).ready(function() {

   var slider =  $('.pgwSlider').pgwSlider();

   var wp = $(window).width();

   slider.startSlide();

   if (wp < 480){

    slider.reload({

    displayList : false

     });
   }


});

