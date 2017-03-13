'use strict';
import { PROJECT_ACTIVE } from 'actions';

export default (state = {}, action) => {
    switch(action.type) {
        case PROJECT_ACTIVE:
            return {...action.project};
        default:
            return state;
    }
}