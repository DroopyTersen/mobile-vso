var { createAction } 	= require('./actionUtils');
var api 				= require('../client/api');

exports.fetchMyTasks = createAction("FETCH_MY_TASKS", api.getMyTasks);
exports.fetchMyDone = createAction("FETCH_MY_DONE", api.getMyRecentDone);
