'use strict';

import request from './fetch';

export const LOGIN = 'LOGIN';
export const loginHandler = () => ({
    type: LOGIN
});

export const LOGOUT = 'LOGOUT';
export const logoutHandler = () => ({
    type: LOGOUT
});

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

export const PROJECT_ACTIVE_ID = 'PROJECT_ACTIVE_ID';
export const projectActiveId = id => ({
    type: PROJECT_ACTIVE_ID,
    id
});

export const PROJECT_MONTH_PREV = 'PROJECT_MONTH_PREV';
export const projectMonthPrev = id => ({
    type: PROJECT_MONTH_PREV,
    id
});

export const PROJECT_MONTH_NEXT = 'PROJECT_MONTH_NEXT';
export const projectMonthNext = id => ({
    type: PROJECT_MONTH_NEXT,
    id
});

export const PROJECT_EDIT = 'PROJECT_EDIT';
export const projectEdit = (id, date, projectType, value) => ({
    type: PROJECT_EDIT,
    id,
    date,
    projectType,
    value
});

export const getMainData = (dispatch, getState) => {
    request(dispatch, 'some url', {/* some params*/}, json => dispatch(projectsUpdate(json)));
}