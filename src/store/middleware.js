import { isFSA } from 'flux-standard-action';

var isPromise = function(obj) {
	return obj && typeof obj.then === 'function';
}

export var promiseMiddleware = function( { dispatch }) {
	return next => action => {
		// If its a promise, wait for it to resolve and dispatch more stuff
		if (isPromise(action.payload)) {
			action.payload.then(
				result => dispatch({...action, payload: result, status: "success" })
				,
				error => dispatch({...action, payload: error, status: "error" })
			);
			// send through the original action with a cleared out payload (the promise) and pending status
			action = {...action, payload: {}, status: "pending" };
		}
		// send it to the next middleware
		return next(action);
	}
};