var { createAction } = require('./actionUtils');

exports.navigate = createAction("SWITCH_VIEW");
exports.pageLoaded = createAction("PAGE_LOADED");