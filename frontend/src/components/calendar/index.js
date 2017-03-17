'use strict';
import { connect } from 'react-redux';
import { calendarSwitch } from 'actions';
import dateFormat from 'dateformat';
import Header from './header';
import Cell from './edit-cell';
import styles from './styles.styl';

const stateToProps = ({activeProjectId, projects}) => ({
    activeProjectId,
    projects
});

const dispatchToProps = (dispatch) => {
    return {
        calendarSwitch(date) {
            dispatch(calendarSwitch(date))
        }
    };
};

const getMonthArr = (date = Date.now()) => {
    var currDay = new Date(date);
    var currentMonthArr = [];
    var daysNum = new Date(currDay.getFullYear(), currDay.getMonth() + 1, 0).getDate();
    var obj = {};

    for (var i = 0; i < daysNum; i++) {
        obj[dateFormat(currDay.setDate(i + 1), 'mm/dd/yy')] = {
            timestamp: currDay.getTime()
        };
    }

    return obj;
};

class Calendar extends React.Component {
    shouldComponentUpdate(nextProps) {
        return true;
    }
    render() {
        const { activeProjectId, projects } = this.props;
        const project = projects[activeProjectId];
        const month = getMonthArr(project.date);

        return(
           <div>
                <h2>{dateFormat(project.date, 'yyyy')}</h2>
                <table className={styles.table}>
                   {<Header month={month}/>}
                   <tbody>
                       <tr>
                           {Object.keys(month).map(key => (
                                <Cell key={key} type="main" date={key}/>
                            ))}
                       </tr>
                       <tr>
                           {Object.keys(month).map(key => (
                                <Cell key={key} type="help" date={key}/>
                            ))}
                       </tr>
                       <tr>
                           {Object.keys(month).map(key => (
                                <Cell key={key} type="feed" date={key}/>
                            ))}
                       </tr>
                   </tbody>
               </table>
           </div>
        )
    }
}

export default connect(stateToProps, dispatchToProps)(Calendar);