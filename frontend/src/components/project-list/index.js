'use strict';
import { connect } from 'react-redux';
import Project from './project';

const stateToProps = ({projects}) => ({
    projects
});

class ProgectsList extends React.Component {
    render() {
        const { projects } = this.props;

        return (
            <table>
                <tbody>
                    {projects.map((project, index) => {
                         return <Project data={project} key={index}/>;
                    })}
                </tbody>
            </table>
        );
    }
};

export default connect(stateToProps)(ProgectsList);