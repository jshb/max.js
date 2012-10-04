
var maxjs = function() {
	
	var rules = [
		//{ replace: { find: /(.*?)\+\+/gi, replace: '$1 = $1 + 1' } },	// 10 + operator 1	b27
		//{ replace: { find: /(.*?)\-\-/gi, replace: '$1 = $1 - 1' } },	// 10 - operator 1	b27
		{ replace: { find: /([^0-9])0([^0-9])/gmi, replace: '$1(1 * 0)$2' } },	// 10 number 0 1
		{ replace: { find: /([^0-9])1([^0-9])/gmi, replace: '$1(1*-3-3+7)$2' } },	// 10 number 1 1
		{ replace: { find: /(.*)\/\/(.*)/gmi, replace: '\r\n//$2\r\n$1' } },	// 30 comments 1
		//{ replace: { find: /if(.*)(\(.*\))([^{]*)\r*;/gi, replace: 'if$1$2 {\r\n$3\r\n}' } },	// 30 if 1	b
		//{ replace: { find: /\((.*?)\)/gi, replace: '(($1))' } },	// 40 () set 1	b:functions
		{ replace: { find: /(\S)([\(\)\{\}\[\]])/gmi, replace: '$1 $2' } },	// 50 brackets 1
		{ replace: { find: /([\(\)\{\}\[\]])(\S)/gmi, replace: '$1 $2' } },	// 50 brackets 2
		{ replace: { find: /(\S);/gmi, replace: '$1 ;' } },	// 50 ; 1
		{ replace: { find: /;/gmi, replace: ';\r\n' } },	// 50 ; 1
		{ replace: { find: /\r\n\r\n\r\n/gi, replace: '\r\n\r\n\r\n//-------------->> Now do the following: <<--------------//\r\n\r\n\r\n' } },	// 80 gaps
		//{ replace: { find: /([\(|\[|\{])/gi, replace: '$1\r\n' } },	// 80 opening brackets 1	b21
		//{ replace: { find: /([\)|\]|\}])/gi, replace: '\r\n$1' } },	// 80 closing brackets 1	b21
		{ replace: { find: /[^\S]if(.*|[^\(])\((.*)\)/gi, replace: '// An if statement which tests if $2 \r\nif$1($2)' } },	// 90 if 2
	];
	
	return {
	
		maximise: function(script){
			
			//var i = 9;
			
			for ( var i = 0; i < rules.length; i++) {
				
				if (rules[i].replace != undefined) {
					
					script = script.replace(rules[i].replace.find, rules[i].replace.replace);
					
				}
				
			}
			
			return script;
			
		}
	
	};
	
}();