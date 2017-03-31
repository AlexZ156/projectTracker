'use strict';
import { connect } from 'react-redux';
import Project from './project';

const stateToProps = ({routing}) => {
    console.log('routing ======> ', routing)
    return {
        projects:{}
    }
};

class ProgectsList extends React.Component {
    render() {
        const { projects } = this.props;

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