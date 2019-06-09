$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $(document).on('click', '.nav-button', function() {
        $('.sidenav').sidenav('close');
    });

});