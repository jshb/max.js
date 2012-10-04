
var testNo = 1;
var totalTests = 9;

$(function(){
	
	maximiseURL("tests/test017.js", testResult);
	
});

function maximiseURL(url, callback) {
	
	$.ajax({
		url: url,
		dataType: "text",
		success: function(data, textStatus, jqXHR){
			
			callback({ original: data, maxified: maxjs.maximise(data), url: url});
			
		},
		error: function(jqXHR, textStatus, errorThrown){
			console.log("error_no_response");
		}
	});
}

function testResult(data) {

	$('#before').text(data.original);
	$('#after').text(data.maxified);
	
	result = -1;
	
	eval(data.maxified);
	
	$('#result').text("Valid: " + (result == true) + ", Characters: " + data.original.length + " -> " + data.maxified.length);
}