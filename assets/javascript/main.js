$(document).ready(function(){
    $('.sidenav').sidenav();

    $(document).on('click', '.nav-button', function() {
        $('.sidenav').sidenav('close');
    });
});