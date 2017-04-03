'use strict';

import { connect } from 'react-redux';
import { projectActiveId } from 'actions';
import { Link } from 'react-router-dom';

const stateToProps = ({projects, routing}) => ( {
    routing,
    projects
});

const Project = ({projects, id, dispatch, routing}) => {
    const chooseProject = () => {
        dispatch(projectActiveId(id));
    };

    const project = projects[id];

    return (
        <tr>
            <td onClick={chooseProject}>
                {project.name}
                <Link to={`${location.pathname}/${id}`}>asdasdasdasas</Link>
            </td>
        </tr>
    );
}

export default connect(stateToProps)(Project);
