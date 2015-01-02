// global variables to use
var goto_container = $('#goto-container');
var goto_element = $('#goto');
var disapear_distance_to_top = 100;

/** Choose a random element from an array
* @param {array} arr - Array of elements
*
* @return {object} obj - Element from Array
*
*/
function random_choice (arr) {
    var rand = Math.random();
    rand *= arr.length;
    rand = Math.floor(rand);
    return arr[rand];
}

/** Initialize the goto element
* Globally uses
* @param {DOM} goto_element
* @param {DOM} goto_match_css
* @param {DOM} goto_match_css_attrs
*
*/
function init_goto () {
    goto_container.css("display","block");
    // check is it's currently visible
    if ($(window).scrollTop() < disapear_distance_to_top) {
        goto_container.hide();        
    } else {
        goto_container.show();
    }
}
$(document).ready(init_goto);

/** Hide goto_element near top
* Globally uses
* @param {DOM} goto_element
* @param {DOM} disapear_distance_to_top
*
*/
function disapear_near_top() {
    var is_visible = goto_container.block == 'none';
    var near_top = $(window).scrollTop() < disapear_distance_to_top;
    // check if element is near the top
    if ( near_top && !(is_visible) ) {        
        goto_container.slideUp();
    } else {
        goto_container.slideDown(); 
    }
}
$(window).scroll(disapear_near_top);

/** goto_element on click
* Globally uses DOM element "html, body"
*
*/
function scroll_to_top() {
    $("html, body").animate({ 
        scrollTop: 0 
    }, "slow");
}
goto_element.click(scroll_to_top);
