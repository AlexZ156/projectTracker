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
                    {Object.keys(projects).map(name => {
                         return <Project id={name} key={name}/>;
                    })}
                </tbody>
            </table>
        );
    }
};

export default connect(stateToProps)(ProgectsList);