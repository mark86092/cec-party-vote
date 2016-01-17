var fs = require('fs');
	
var tree = require('./tree');
var goSelArea = require('./option_fix').goSelArea;

fs.writeFileSync('區域立法委員.mapping.json', JSON.stringify(tree.root_T1, null, 2)); 

fs.writeFileSync('不分區立委.mapping.json', JSON.stringify(tree.root_T4, null, 2));

fs.writeFileSync('總統.mapping.json', JSON.stringify(tree.root_P1, null, 2));

tree.root_T1.nodes.forEach(function(node){
	node.nodes.forEach(function(node){
		node.nodes.forEach(function(node){
			goSelArea(node);
		});
	});
});

tree.root_T4.nodes.forEach(function(node){
	node.nodes.forEach(function(node){
		goSelArea(node);
	});
});

tree.root_P1.nodes.forEach(function(node){
	node.nodes.forEach(function(node){
		goSelArea(node);
	});
});

fs.writeFileSync('區域立法委員_開票所.mapping.json', JSON.stringify(tree.root_T1, null, 2)); 

fs.writeFileSync('不分區立委_開票所.mapping.json', JSON.stringify(tree.root_T4, null, 2));

fs.writeFileSync('總統_開票所.mapping.json', JSON.stringify(tree.root_P1, null, 2));
