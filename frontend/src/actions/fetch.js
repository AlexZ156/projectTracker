'use strict';

import {
	fetchStart,
	fetchEnd,
	preloaderStart,
    preloaderEnd
} from 'actions';
import fakeData from './fake-data'

const status = (response) => (
	new Promise((resolve, reject) => {
		if (response.status >= 200 && response.status < 300) {
			resolve(response)
		} else {
			reject(console.error(response.statusText))
		}
	})
);

const json = (response) => response.json();

let timer;

const showPreloader = (dispatch) => {
	clearTimeout(timer);

	timer = setTimeout(() => {
		dispatch(preloaderStart());
	}, 1000);
};

const hidePreloader = (dispatch) => {
	dispatch(preloaderEnd());

	clearTimeout(timer);
};

export default (dispatch, url, params = {}, cb) => {
	dispatch(fetchStart());
	console.log('fakeData == > ', fakeData)
	cb(fakeData);
	dispatch(fetchEnd());
	/*dispatch(fetchStart());

	let body = new FormData();
	body.append('builderData', JSON.stringify(params));

	showPreloader(dispatch);

	fetch(url, {
		method: 'POST',
		body
	}).then(status).then(json).then(json => {
		if (json.success) {
			cb(json.data);
			dispatch(fetchEnd());
		} else {
			return Promise.reject('success: false');
		}
		hidePreloader(dispatch);
	}).catch(e => {
		console.error('Request failed', e);
		hidePreloader(dispatch);
	});*/
};
