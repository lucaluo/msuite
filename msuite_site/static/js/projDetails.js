$(document).ready(function(){
	
    $('.leaveComment').click(function (e) {
    	e.preventDefault();
        $("#commentBox").toggle(700);
    });
    $('.showComments').click(function (e) {
    e.preventDefault();
    $("#comments").toggle(1000);
    });
    $('.thePager').click(function (e) {
    e.preventDefault();
    });
	
});