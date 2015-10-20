$(document).ready(function(){


	
	$('#container-fluid').on('click', '#randomButton', function(){
		
		genList();
		
	});

	deleteEntry();

});


function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function genList () {

		var propertyId = randomNumber(1000, 2000);
		var sqFtNumber = randomNumber(1, 1000);
		var sqFtCost = randomNumber(1, 50);

		$("#container-fluid").append("<div class='genList well col-md-2'></div>");
		var $el = $("#container-fluid").children().last().hide().fadeIn(400);

		$el.append("<div>" + 'Property ID: ' + propertyId + "</div>");
		$el.append("<div>" + 'Square Footage: ' + sqFtNumber +  "</div>");
		$el.append("<div>" + 'Square Footage: $' + sqFtCost + "</div>");
		$el.append("<div>" + '<button class="removeButton btn btn-danger">REMOVE</button>' + "</div>");

}

function deleteEntry () {

	$('#container-fluid').on('click', '.removeButton', function(){
		// $(this).closest('.genList').fadeOut(1000, this.remove());
		$(this).closest('.genList').remove();
	});

}