'use strict';

import {
    PROJECTS_UPDATE,
    PROJECT_MONTH_PREV,
    PROJECT_MONTH_NEXT,
    PROJECT_EDIT
} from 'actions';

const getPrevMonth = (date = Date.now()) => {
    return new Date(date).setMonth(new Date(date).getMonth() - 1);
};

const getNextMonth = (date = Date.now()) => {
    return new Date(date).setMonth(new Date(date).getMonth() + 1);
};

const setTiming = (timeObj, action) => {
    console.log('timeObj == > ', timeObj)
    console.log('action == > ', action)
    console.log('=============================')
    return {
        ...timeObj,
        [action.date]: {
            ...((timeObj[action.date] && timeObj[action.date][action.projectType]) || {}),
            [action.projectType]: action.value
        }
        // ...(state[action.id].timing)
        // ...(timeObj[action.date])
    };
}

export default (state = {}, action) => {
    switch (action.type) {
        case PROJECTS_UPDATE:
            return {...action.data};
        case PROJECT_MONTH_PREV:
             return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    date: getPrevMonth(state[action.id].date)
                }

            };
        case PROJECT_MONTH_NEXT:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    date: getNextMonth(state[action.id].date)
                }

            };
        case PROJECT_EDIT:
             return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    ...setTiming(state[action.id].timing || {}, action)
                }

            };
        default:
            return state;
    }
};
