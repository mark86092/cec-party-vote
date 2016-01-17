var Mapping = function (name, link) {
	this.name = name;
	this.link = link;
	this.data = [];
	this.nodes = [];
};
Mapping.prototype = {
	addNode: function(node) {
		this.nodes.push(node);
		return node;
	}
};


function padding (str, pat) {
	return pat.substr(0, (pat.length-str.length) ) + str.toString(); 
}

module.exports = {
	Mapping: Mapping,
	padding: padding
};
