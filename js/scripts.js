$(document).ready(function(){
    $('footer').load( "./footer.html" );
    $('#navbar').load( "./topnav.html", function(){ // adding this function is callback
        $('#contactMenu').tooltip();
    });
    
}).on({
    mouseenter: function () {
        $(this).toggleClass('active','fast', 'easeOutSine');
    }, mouseleave: function() {
        $(this).toggleClass('active','fast', 'easeOutSine');
    } }, "#footer .fa"); // passes element as argument to .on

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.navbar-brand').fadeIn('fast', 'easeInSine');
    } else {
        $('.navbar-brand').fadeOut('fast','easeOutSine');
    }
});