'use strict';
import { connect } from 'react-redux';
import Project from './project';

const stateToProps = ({routing, projects}) => ({
    routing,
    projects
});

class ProgectsList extends React.Component {
    render() {
        const { projects } = this.props;

        console.log(1111, this)
        return (
            <table>
                <tbody>
                    {Object.keys(projects).map(name => {
                         return <Project id={name} key={name} /*props={{...this.props}}*//>;
                    })}
                </tbody>
            </table>
        );
    }
};

export default connect(stateToProps)(ProgectsList);