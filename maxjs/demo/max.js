
var maxjs = function() {
	
	var rules = [
		{ replace: { find: /\/\/(.*)/gm, replace: '' } },
	 	{ replace: { find: /\r|\n/gm, replace: '' } },
	 	{ replace: { find: / =/gm, replace: '=' } },
	 	{ replace: { find: /= /gm, replace: '=' } },
	 	{ replace: { find: / \+/gm, replace: '+' } },
	 	{ replace: { find: /\+ /gm, replace: '+' } },
	 	{ replace: { find: /{ /gm, replace: '{' } },
	 	{ replace: { find: / {/gm, replace: '{' } },
	 	{ replace: { find: /} /gm, replace: '}' } },
	 	{ replace: { find: / }/gm, replace: '}' } },
	 	{ replace: { find: /;for \(/gm, replace: ';for(' } },
	 	{ replace: { find: /;if \(/gm, replace: ';if(' } },
	 	{ replace: { find: /  /gm, replace: ' ' } },
	 	{ replace: { find: /  /gm, replace: ' ' } },
	 	{ replace: { find: /  /gm, replace: ' ' } },
	 	{ replace: { find: / \+= /gm, replace: '+=' } },
	 	{ replace: { find: /; /gm, replace: ';' } },
	 	{ replace: { find: / ;/gm, replace: ';' } }
	];
	
	return {
	
		maximise: function(script){
			
			for ( var i = 0; i < rules.length; i++) {
				
				if (rules[i].replace != undefined) {
					
					script = script.replace(rules[i].replace.find, rules[i].replace.replace);
					
				}
				
			}
			
			return script;
			
		}
	
	};
	
}();