'use strict';
import { connect } from 'react-redux';
import {
    Link
} from 'react-router-dom';

const stateToProps = ({projects, activeProjectId}) =>({
    projects,
    activeProjectId
});

class ProjectEdit extends React.Component {
    render() {
        console.log('Project', this.props.match)

        return(
            <div>
               <h1>Project !!!</h1>
               <Link to="/login">Login</Link>
            </div>
        )
    }
}

export default connect(stateToProps)(ProjectEdit);
