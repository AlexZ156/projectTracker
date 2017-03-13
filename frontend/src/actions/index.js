'use strict';

import request from './fetch';

export const FETCH_START = 'FETCH_START';
export const fetchStart = () => ({
    type: FETCH_START
});

export const FETCH_END = 'FETCH_END';
export const fetchEnd = () => ({
    type: FETCH_END
});

export const DATA_SET = 'DATA_SET';
export const dataSet = data => ({
    type: DATA_SET,
    data
});

export const PROJECTS_UPDATE = 'PROJECTS_UPDATE';
export const projectsUpdate = data => ({
    type: PROJECTS_UPDATE,
    data
});

export const PROJECT_ACTIVE = 'PROJECT_ACTIVE';
export const projectActive = project => ({
    type: PROJECT_ACTIVE,
    project
});

export const CALENDAR_SWITCH = 'CALENDAR_SWITCH';
export const calendarSwitch = date => ({
    type: CALENDAR_SWITCH,
    date
});

export const getMainData = (dispatch, getState) => {
    request(dispatch, 'some url', {/* some params*/}, json => dispatch(projectsUpdate(json)));
}