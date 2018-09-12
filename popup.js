
$(function() {
	console.log( "ready!" );
	//$('#greeting').text('here')
    $('#name').keyup(function(){
    	$('#greeting').text('hi.. ' + $('#name').val() );
    });
});



