/**
 * main.js
 * Contains all functionality that requires JavaScript
 * @author Kees Romkes https://github.com/Keesromkes
 */
$(function() {
    // Get quote element
	var myQuote = $('#my_quote');
    // Hide quote
	myQuote.hide();
    // Toggle quote on button click
	$('#btn-on').click(function() {
		myQuote.toggle(500);
	});
});