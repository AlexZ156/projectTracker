'use strict';
import { connect } from 'react-redux';
import Calendar from './../calendar/'

const stateToProps = ({projects, activeProjectId}) =>({
    projects,
    activeProjectId
});

class ProjectEdit extends React.Component {
    render() {
        const { projects, activeProjectId } = this.props;
        const project = projects[activeProjectId];

        return(
            <div>
                <h1>{project.name}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>main</td>
                        </tr>
                        <tr>
                            <td>help</td>
                        </tr>
                        <tr>
                            <td>feed</td>
                        </tr>
                    </tbody>
                </table>
                <Calendar/>
                <button>+++ Save +++</button>
            </div>
        )
    }
}

export default connect(stateToProps)(ProjectEdit);