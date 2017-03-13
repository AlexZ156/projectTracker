'use strict';

/*import {
	MODULE_TURN_ON,
	MODULE_TURN_OFF,
	MODULE_SAVE,
	MODULE_ADD,
	MODULE_REMOVE,
	MODE_CHANGE,
	MODE_SAVE,

	filesTreeGet
} from 'actions';*/

let timer;

export default store => next => action => {
	// console.log('files-refresh-middleware.js')
	/*if (~[
			MODULE_TURN_ON,
			MODULE_TURN_OFF
		].indexOf(action.type)
	) {
		clearTimeout(timer);
		timer = setTimeout(() => store.dispatch(filesTreeGet()), 1000);
	} else if (~[
			MODULE_SAVE,
			MODULE_ADD,
			MODULE_REMOVE,
			MODE_CHANGE,
			MODE_SAVE
		].indexOf(action.type)) {
		timer = setTimeout(() => store.dispatch(filesTreeGet()), 1);
	}*/

	return next(action);
};
