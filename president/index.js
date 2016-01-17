var request = require('request'),
	cheerio = require('cheerio');
var fs = require('fs');

// generate the mapping of link nodes
var tree = require('./treeP1');
var addArea = require('./option');

tree.nodes.forEach(function(subnode) {
	subnode.nodes.forEach(function(subsubnode){
		addArea(subsubnode);
	});
});

function query(link, callback) {
	request(link, function(error, res, body) {
		if (!error && res.statusCode == 200) {
			var $ = cheerio.load(body);
			var table = $(".tableT");
			
			var title = [];
			table.find(".trHeaderT td").each(function(index, element){
				title[index] = $(this).text();
			});
			
			var data = [];
			table.find(".trT").each(function(_index, element){
				var trData = {};
				$(element).find("td").each(function(index, element){
					trData[title[index]] = $(this).text();
				});
				data.push(trData);
			});
			
			callback(data);
		}
	});
}

var count = 0;
function doPost() {
	count -= 1;
	console.log(count);
	if (count === 0) {
		fs.writeFile('president.json', JSON.stringify(tree, null, 2), function(err) {
			if(err) {
				console.log(err);
			}
		}); 
	}
}

function queryNode(node) {
	count += 1;
	query(node.link, function(data){
		node.data = data;
		doPost();
	});
	node.nodes.forEach(function(subnode){
		queryNode(subnode);
	});
}

queryNode(tree);