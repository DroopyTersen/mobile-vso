var WorkItem = require("./workItem");
var queries = require('./queries');
var _ = require("lodash");

var VsoProject = function(ctx, name) {
	this._ctx = ctx;
	this.name = name;
	this.baseUrl = `/${name}/_apis`;
	this.queryUrl = `/${name}/_apis/wit/wiql?api-version=1.0`
};

var mapIds = function(data) {
	var ids = [];
	if (data.workItemRelations) {
		ids = data.workItemRelations.map(w => w.target.id);
	} else if (data.workItems) {
		ids = data.workItems.map(w => w.id);
	}
	return ids;
};

var mapToWorkItemObj = function(data) {
	var workItems = {};
	data.value.forEach(result => {
		var workItem = new WorkItem(result);
		workItems[workItem.id + ""] = workItem;
	})
	return workItems;
};

var recursiveGetPath = function(workItem, workItems) {
	var path = workItem.title;
	if (workItem.parent && workItem.parent.id) {
		var parentItem = workItems[workItem.parent.id];
		if (parentItem) {
			path = recursiveGetPath(parentItem, workItems) + " / " + path;
		}
	}
	return path;
};

var populateParentPath = function(workItems) {
	var ids = Object.keys(workItems);
	ids.forEach(id => {
		workItems[id].path = recursiveGetPath(workItems[id], workItems)
							.replace(workItems[id].title, "").trim()
							.replace(/\/$/, ""); // get rid of last slash
	})
	return workItems;
};

// Will only support hierarchy queries
VsoProject.prototype.query = function(wiqlStr) {
	var self = this;
	var workItems = {};
	return this._ctx.postJSON(this.queryUrl, { query: wiqlStr })
		.then(mapIds)
		.then(self.getItems.bind(self))
		.then(mapToWorkItemObj)
		.then(populateParentPath);
}

VsoProject.prototype.myOpenTasks = function() {
	return this.query(queries.myOpenTasks)
		.then(workItems => {
			return _.chain(workItems)
					.filter(item => item.workItemType === "Task")
					.groupBy("state")
					.value();	
		});
}

VsoProject.prototype.getItems = function(ids) {
	var url = this.baseUrl.replace(this.name + "/", "") + "/wit/workitems?$expand=all&ids=" + ids.join(",");
	return this._ctx.getJSON(url);
}




// OLD STUFF BEFORE EXTRACTING WIQL WITH TEAM EXPLORER

VsoProject.prototype.getQueryItems = function(queryId) {
	var self = this;
	return this.runQuery(queryId)
		.then(mapQueryItemsToIdHierarchy)
		.then(self.getItems.bind(self))
		.then(mapToWorkItems);
};

VsoProject.prototype.getQuery = function(path) {
	var url = this.baseUrl + "/wit/queries" + path;
	return this._ctx.getJSON(url);
};

VsoProject.prototype.runQuery = function(id) {
	var url = this.baseUrl + "/wit/wiql/" + id;
	return this._ctx.getJSON(url);
};

VsoProject.prototype.queries = function(){
	var url = this.baseUrl + "/wit/queries";
	return this._ctx.getJSON(url);
};

module.exports = VsoProject;