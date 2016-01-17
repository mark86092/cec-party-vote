var fs = require('fs');
	
var tree = require('./tree');

fs.writeFile('區域立法委員.mapping.json', JSON.stringify(tree.root_T1, null, 2), function(err) {
	if(err) {
		console.log(err);
	}
}); 

fs.writeFile('不分區立委.mapping.json', JSON.stringify(tree.root_T4, null, 2), function(err) {
	if(err) {
		console.log(err);
	}
}); 
