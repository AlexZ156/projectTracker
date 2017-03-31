'use strict';
import {
    Link 
} from 'react-router-dom';
import { connect } from 'react-redux';
import LoginWrap from '../login-wrap';
import ProgectsList from './../project-list'

const stateToProps = ({login}, props) => {
    return {
        login: true,
        props
    }
};

const ProjectsComponent = (props) => {
    return (
        <div>
            <h1>Project !!!</h1>
            {/*<ProgectsList {...props}/>*/}
            <ProgectsList/>
            <Link to="/">Home link</Link>
        </div>
    )
}

/*const Project = (props) => {
    console.log('asdasdas', a)
    return(
        <LoginWrap>
            {true && <ProjectsComponent/>}
        </LoginWrap>
    );
};*/

const Project = ({login, props}) => {
    return(
        <LoginWrap>
            {login && <ProjectsComponent /*{...props}*//>}
        </LoginWrap>
    );
};

export default connect(stateToProps)(Project);