'use strict';
import {
    Link 
} from 'react-router-dom';
import { connect } from 'react-redux';
import LoginWrap from '../login-wrap';
import ProgectsList from './../project-list'

const stateToProps = ({login}) => ({
    login
});

const ProjectsComponent = (props) => {
    return (
        <div>
            <h1>Project !!!</h1>
            <ProgectsList/>
            <Link to="/">Home link</Link>
        </div>
    )
}

const Project = ({login, props}) => {
    return(
        <LoginWrap>
            {login && <ProjectsComponent />}
        </LoginWrap>
    );
};

export default connect(stateToProps)(Project);