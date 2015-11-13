var returnMe = function(me) {
	return me;
};

exports.createAction = (type, apiCall) => {
	var payloadCreator = typeof apiCall === 'function' ? apiCall : returnMe

    var actionFunc = function(...args) { 
        return { 
           	type,
        	payload: payloadCreator(...args)
        };
    }
    actionFunc.type = type;
    return actionFunc;
};