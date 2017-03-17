'use strict';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import {
    projectMonthPrev,
    projectMonthNext
} from 'actions';

const stateToProps = ({activeProjectId, projects}) => ({
    project: projects[activeProjectId],
    activeProjectId

});

const dispatchToProps = (dispatch) => {
    return {
        projectMonthPrev(id) {
            dispatch(projectMonthPrev(id))
        },
        projectMonthNext(id) {
            dispatch(projectMonthNext(id))
        }
    };
};

const Controls = ({month, projectMonthPrev, projectMonthNext, project, activeProjectId}) => {
    const prevMonth = () => {
        projectMonthPrev(activeProjectId);
    };
    const nextMonth = () => {
        projectMonthNext(activeProjectId);
    };
    
    return(
        <th colSpan={Object.keys(month).length}>
            <button
                onClick={prevMonth}
            >
                prev month
            </button>
            <strong>
                {dateFormat(project.date, 'mmmm yyyy')}
            </strong>
            <button
                onClick={nextMonth}
            >
                next month
            </button>
        </th>
    )
}

export default connect(stateToProps, dispatchToProps)(Controls);