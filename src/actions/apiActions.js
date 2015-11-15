var { createAction } 	= require('./actionUtils');
var api 				= require('../data/apiProxy');

exports.fetchMyTasks = createAction("FETCH_MY_TASKS", api.getMyTasks);
