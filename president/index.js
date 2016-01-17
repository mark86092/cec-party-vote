var request = require('request'),
	cheerio = require('cheerio');
var fs = require('fs');

// use the mapping
var tree = require('../mapping/tree').root_P1;
var goSelArea = require('../mapping/option_fix').goSelArea;

tree.nodes.forEach(function(node){
	node.nodes.forEach(function(node){
		goSelArea(node);
	});
});

var queue = [];
function query(link, callback) {
	queue.push({link: link, callback: callback});
}

function worker() {
	var start = function() {
		if (queue.length == 0) {
			stop();
			return;	
		}
		var job = queue.pop();
		request({url: job.link}, function(error, res, body) {
			if (!error && res.statusCode == 200) {
				console.log('get ' + job.link);
				var $ = cheerio.load(body);
				var table = $(".tableT");
				
				var title = ['註記', '號次', '候選人姓名', '性別','得票數','得票率%','登記方式'];
				var data = [];
				table.find(".trT").each(function(_index, element){
					var trData = {};
					$(element).find("td").each(function(index, element){
						trData[title[index]] = $(this).text();
					});
					data.push(trData);
				});
				
				job.callback(data);
			} else {
				console.log(error);
			}
			setTimeout(function() {start();}, 100);
		});
	};
	var stop = function() {
		fs.writeFile('president.json', JSON.stringify(tree, null, 2), function(err) {
			if(err) {
				console.log(err);
			}
		}); 
	};

	setTimeout(function() {start();}, 100);
}

function queryNode(node) {
	query(node.link, function(data){
		node.data = data;
	});
	node.nodes.forEach(function(subnode){
		queryNode(subnode);
	});
}

queryNode(tree);

worker();
