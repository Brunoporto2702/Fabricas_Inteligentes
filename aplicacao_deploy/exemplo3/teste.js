
function update(){
	$.ajax({
		method: "GET",
		url: "http://127.0.0.1:8000"
		})
		.done(function(rand){
			$('div').prepend("<p>"+ rand +"</p>");
		})
}


$(document).ready(function(){

	setInterval(function(){update()}, 1000);

})
