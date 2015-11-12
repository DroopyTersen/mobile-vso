import { createAction } from '../_utils/actionUtils';
import Api from '../data/api';


var api = new Api("/configurl");
export const fetchMyTasks = createAction("FETCH_MY_TASKS", api.getMyTasks);
