'use strict';

import { connect } from 'react-redux';
import { projectActiveId } from 'actions';

const stateToProps = ({projects}) => ({
    projects
})

const Project = ({projects, id, dispatch}) => {
    const chooseProject = () => {
        dispatch(projectActiveId(id));
    };

    const project = projects[id];

    return (
        <tr>
            <td onClick={chooseProject}>{project.name}</td>
        </tr>
    );
}

export default connect(stateToProps)(Project);
