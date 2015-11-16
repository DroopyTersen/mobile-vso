var WorkItem = require("./workItem");

var VsoTask = function(ctx, id) {
	this._ctx = ctx;
	this.id = id;
	this.baseUrl = `/_apis/wit/workitems/${id}?api-version=1.0`
};

VsoTask.prototype.update = function(updates) {
	return this._ctx.patchJSON(this.baseUrl, updates)
			.then(data => {
				var item = new WorkItem(data)
				return item;
			});
};

VsoTask.prototype.setState = function(state) {
	var updates = [{
		"op": "add",
		"path": "/fields/System.State",
		"value": state
	}];
	return this.update(updates);
};
module.exports = VsoTask;