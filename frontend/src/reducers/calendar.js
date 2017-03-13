'use strict';

import { CALENDAR_SWITCH } from 'actions';
import dateFormat from 'dateformat';

const getMonthArr = (date) => {
    var currDay = new Date(date);
    var currentMonthArr = [];
    var daysNum = new Date(currDay.getFullYear(), currDay.getMonth() + 1, 0).getDate();
    var obj = {};


    console.log('currDay ==> ', currDay)
    console.log('daysNum ==> ', daysNum)
    for (var i = 0; i < daysNum; i++) {
        /*currentMonthArr.push({
            date: new Date(currDay.setDate(i + 1)).getTime()
        });*/
        obj[dateFormat(currDay.setDate(i + 1), 'mm/dd/yyyy')] = {};
    }

    return obj;

    return currentMonthArr;
};

export default (state = [], action) => {
    switch(action.type) {
        case CALENDAR_SWITCH:
            console.log(dateFormat(action.date, 'mm/dd/yyyy'))
            console.log(getMonthArr(dateFormat(action.date, 'mm/dd/yyyy')))
            return state;
        default:
            return state;
    }
};