// global variables to use
var goto_container = $('#goto-container');
var goto_element = $('#goto');
var goto_match_css = $('footer a');
var goto_match_css_attrs = ['color','cursor'];
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

$(document).ready(init_goto);
/** Initialize the goto element
* Globally uses
* @param {DOM} goto_element
* @param {DOM} goto_match_css
* @param {DOM} goto_match_css_attrs
*
*/
function init_goto () {
    for (var i in goto_match_css_attrs){
        goto_element.css(goto_match_css_attrs[i],
            goto_match_css.css(goto_match_css_attrs[i]));
    }
    if ($(window).scrollTop() < disapear_distance_to_top) {
        goto_element.hide();
    } else {
        goto_element.show();
    }
}

$(window).scroll(disapear_near_top);
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

goto_element.click(scroll_to_top);
/** goto_element on click
* Globally uses DOM element "html, body"
*
*/
function scroll_to_top() {
    $("html, body").animate({ 
        scrollTop: 0 
    }, "slow");
}
