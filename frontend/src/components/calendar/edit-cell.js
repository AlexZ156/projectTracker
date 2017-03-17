'use strict';

import { connect } from 'react-redux';
import styles from './styles.styl';
import { projectEdit } from 'actions';

const stateToProps = ({activeProjectId, projects}) => ({
    project: projects[activeProjectId],
    activeProjectId

});

const Cell = ({project, activeProjectId, type, date, dispatch}) => {
    const onKeyUp = () => {
        dispatch(projectEdit(activeProjectId, date, type, input.value))
    }
    let input;

    return (
        <td>
            <input
                ref={(elem) => {input = elem}}
                className={styles.input}
                type="text"
                onKeyUp={onKeyUp}
            />
        </td>
    )
};

export default connect(stateToProps)(Cell);