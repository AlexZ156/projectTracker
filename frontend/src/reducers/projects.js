'use strict';

import { PROJECTS_UPDATE } from 'actions';

export default (state = [], action) => {
    switch (action.type) {
        case PROJECTS_UPDATE:
            return [...action.data];        
        default:
            return state;
    }
};