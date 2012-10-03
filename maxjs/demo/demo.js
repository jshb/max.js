
var testNo = 1;
var totalTests = 9;

$(function(){
	
	maximiseURL("tests/test016.js", testResult);
	/*
	var max = new maxjs();
	var output = maxjs.maximise("ff");
	*/
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
	/*
	result = 0;
	
	eval();
	
	return result; 
	*/
}

function testResult(data) {

	$('#before').text(data.original);
	$('#after').text(data.maxified);
	
	result = -1;
	
	eval(data.maxified);
	
	$('#result').text("Valid: " + (result == true) + ", Characters: " + data.original.length + " -> " + data.maxified.length);
}