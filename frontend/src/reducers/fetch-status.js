'use strict';

import {
    FETCH_START,
    FETCH_END
} from 'actions';

export default (state = 0, action) => {
    switch(action.type) {
        case FETCH_START:
            return 0;
        case FETCH_START:
            return 1;
        default:
            return state;
    }
};