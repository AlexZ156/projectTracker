'use strict';
import { PROJECT_ACTIVE_ID } from 'actions';

export default (state = null, action) => {
    switch(action.type) {
        case PROJECT_ACTIVE_ID:
            return action.id;
        default:
            return state;
    }
}