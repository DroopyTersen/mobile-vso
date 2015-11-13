var { createAction } 	= require('./actionUtils');
var api 				= require('../data/api');

exports.fetchMyTasks = createAction("FETCH_MY_TASKS", api.getMyTasks);
