//Ex Usage:
// var vsoFactory = require('droopy-vso');
// var vso = vsoFactory.create(req.user.authHash);

var request = require("request-promise");
var VsoProject = require("./vsoProject");

//http://localhost:3000/api/Skyline-Portals/queries/8586b69c-4593-4da2-ac1d-138d17463c66

var _getRequestOptions = function(url, authHash) {
	var options = {
		url: url,
		headers: {
			"Authorization": "Basic " + authHash,
			"Accept": "application/json"
		},
		json: true
	};
	return options;
};

var _get = function(url, authHash) {
	return request.get(_getRequestOptions(url, authHash));
};

var _post = function(url, authHash, body) {
	var options = _getRequestOptions(url, authHash);
	options.body = body;
	options.method = "POST";
	return request(options);
}
var _hostname = "skyline.visualstudio.com";
var _baseUrl = `https://${_hostname}/defaultcollection`;

var setHost = function(host) {
	_hostname = host;
	_baseUrl = `https://${_hostname}/defaultcollection`;
};

var create = function(authHash) {
	var _authHash = authHash;
	var vsoContext = {};
	
	// base api method
	vsoContext.getJSON = (path) => _get(_baseUrl + path, _authHash);
	vsoContext.postJSON = (path, body) => _post(_baseUrl + path, _authHash, body);
	
	// you should be passing this to constructor so this really shouldn't be necessary
	vsoContext.setAuthHash = function(authHash) {
		return _authHash = authHash;
	};
	
	vsoContext.projects = function(name) {
		///DefaultCollection/_apis/projects
		if (!name) {
			return vsoContext.getJSON("/_apis/projects");
		} else {
			return new VsoProject(vsoContext, name); 
		}
	};
	
	//return public methods
	return vsoContext;
};

module.exports = { create, setHost };

//https://skyline.visualstudio.com/DefaultCollection/_apis/wit/workItems?ids=14552,14566