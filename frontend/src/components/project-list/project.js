'use strict';

import { connect } from 'react-redux';
import { projectActiveId } from 'actions';
import {
    Link 
} from 'react-router-dom';

const stateToProps = (...a) => {
    console.log('GFGFFG', a)

    return {
        projects: {}
    }
}

/*const Project = ({projects, id, dispatch, match, props}) => {

    console.log('props === ', props)
    console.log('match === ', match)
    const chooseProject = () => {
        dispatch(projectActiveId(id));
    };

    const project = projects[id];

    return (
        <tr>
            <td onClick={chooseProject}>{project.name} <Link to={`/projects/${id}`}>asdasdasdasas</Link></td>
        </tr>
    );
}
*/

class Project extends React.Component {
    chooseProject() {
        dispatch(projectActiveId(id));
    }

    render() {
        const {projects, id} = this.props;
        const project = projects[id];

        console.log('!!!! ', this)
        return (
            <tr>
                <td onClick={this.chooseProject}>{project.name} <Link to={`/projects/${id}`}>asdasdasdasas</Link></td>
            </tr>
        );
    }
}

export default connect(stateToProps)(Project);
