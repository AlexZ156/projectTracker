'use strict';
import { getMainData } from 'actions';
import { connect } from 'react-redux';
import ProgectsList from './project-list'
import ProjectEdit from './project-edit'


const stateToProps = ({activeProjectId}) => ({
    activeProjectId
});

const dispatchToProps = (dispatch) => {
    return {
        getMainData() {
            dispatch(getMainData);
        }
    };
};

class AppComponent extends React.Component {
    componentDidMount() {
        const { getMainData } = this.props;
        getMainData();
    }
    render() {
        const { activeProjectId } = this.props;

        return(
            <div>
                <ProgectsList/>
                {activeProjectId && <ProjectEdit/>}
            </div>
        ); 
    }
};

export default connect(stateToProps, dispatchToProps)(AppComponent);
