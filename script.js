$(document).ready(function(){
  $.getJSON('https://api.myjson.com/bins/1fgg5d', function(data){
    // write your function on this block
    $.map(data, function(model, make){
    	// console.log( make, model );
    	$(data).each(function(){
    		$("#make").append("<option>" + (make) + "</option>");
    	});

    });
  }); //end of get
});//end of ready