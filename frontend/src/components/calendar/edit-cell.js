'use strict';

import { connect } from 'react-redux';
import styles from './styles.styl';
import { projectEdit } from 'actions';

const stateToProps = ({activeProjectId, projects}) => ({
    project: projects[activeProjectId],
    activeProjectId

});

const dispatchToProps = (dispatch) => ({
    projectEdit(id, date, projectType, value) {
        dispatch(projectEdit(id, date, projectType, value));
    }
});

class Cell extends React.Component {
    onChange = () => {
        const { projectEdit, activeProjectId, date, type } = this.props;
        projectEdit(activeProjectId, date, type, this.input.value);
    }
    render() {
        let input;
        const {project, activeProjectId, type, date, dispatch} = this.props;
        const timeTypeObj = project.notes && project.notes[date] && project.notes[date][type] || {};

        return (
            <td>
                <input
                    ref={(elem) => {this.input = elem}}
                    className={styles.input}
                    type="number"
                    onInput={this.onChange}
                    defaultValue={timeTypeObj.value}
                    min="0"
                    max="24"
                />
            </td>
        )
    }
}

export default connect(stateToProps, dispatchToProps)(Cell);