var treeP1 = require('./treeP1'),
	fs = require('fs');

var addArea = require('./option');

treeP1.nodes.forEach(function(subnode) {
	subnode.nodes.forEach(function(subsubnode){
		addArea(subsubnode);
	});
});

fs.writeFile('map.json', JSON.stringify(treeP1, null, 2), function(err) {
	if(err) {
		console.log(err);
	}
});
