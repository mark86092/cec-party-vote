var request = require('request'),
	cheerio = require('cheerio');
var fs = require('fs');
	
var tree = require('./treeT');
/*var tree = [
	{
		name: '連江縣',
		link: 'http://www.cec.gov.tw/zh_TW/T4/n802000000000000.html',
		nodes: [
			{
				name: '南竿鄉',
				link: 'http://www.cec.gov.tw/zh_TW/T4/n802000100000000.html'
			}, {
				name: '北竿鄉',
				link: 'http://www.cec.gov.tw/zh_TW/T4/n802000200000000.html'
			}, {
				name: '莒光鄉',
				link: 'http://www.cec.gov.tw/zh_TW/T4/n802000300000000.html'
			}, {
				name: '東引鄉',
				link: 'http://www.cec.gov.tw/zh_TW/T4/n802000400000000.html'
			}
		]
	}
];*/

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
		fs.writeFile('不分區立委資料.json', JSON.stringify(tree, null, 2), function(err) {
			if(err) {
				console.log(err);
			}
		}); 
	}
}

tree.forEach(function(i){
	count += 1;
	query(i.link, function(data){
		i.data = data;
		doPost();
	});
	
	if (i.nodes) {
		i.nodes.forEach(function(j){
			count += 1;
			query(j.link, function(data){
				j.data = data;
				doPost();
			});
		});
	}
});