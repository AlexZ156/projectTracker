'use strict';
import { getMainData, calendarSwitch } from 'actions';
import { connect } from 'react-redux';
import ProgectsList from './project-list'
import ProjectEdit from './project-edit'


const stateToProps = () => {
    return {

    };
};

const dispatchToProps = (dispatch) => {
    return {
        getMainData() {
            dispatch(getMainData);
        },
        calendarSwitch(date) {
            dispatch(calendarSwitch(date))
        }
    };
};

class AppComponent extends React.Component {
    componentDidMount() {
        const { getMainData, calendarSwitch } = this.props;
        getMainData();
        calendarSwitch(Date.now());
    }
    render() {
       return(
            <div>
                <ProgectsList/>
                <ProjectEdit/>
            </div>
        ); 
    }
};

export default connect(stateToProps, dispatchToProps)(AppComponent);