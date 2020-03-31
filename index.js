'use strict';

//responsible to toggle the hamburger menu

function toggleMenu(){
    $('nav').on('click', '.ham-button', function(){
        $(this).closest("nav").find('ul').toggleClass('hide-nav-link');
        });
        
}

//calls all the functions
function callFunctions(){
    toggleMenu();
}

$(callFunctions())