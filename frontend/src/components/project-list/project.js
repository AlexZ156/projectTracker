'use strict';

import { connect } from 'react-redux';
import { projectActive } from 'actions';

const Project = ({data, dispatch}) => {
    const chooseProject = () => {
        dispatch(projectActive(data));
    };

    return (
        <tr>
            <td onClick={chooseProject}>{data.name}</td>
        </tr>
    );
}

export default connect()(Project);
