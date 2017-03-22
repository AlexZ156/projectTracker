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

const setTiming = (noteObj, action) => {
    return {
        ...noteObj,
        [action.date]: {
            ...(noteObj[action.date] || {}),
            [action.projectType]: {
                ...((noteObj[action.date] && noteObj[action.date][action.projectType]) || {}),
                ...{value: action.value}
            }
        }
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
                    ...{notes: {
                        ...setTiming(state[action.id].notes || {}, action)
                    }}
                }

            };
        default:
            return state;
    }
};
