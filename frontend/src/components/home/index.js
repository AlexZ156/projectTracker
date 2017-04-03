'use strict';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginWrap from '../login-wrap';

const stateToProps = ({login}) => ({
    login
});

const HomeComponent = () => (
    <div>
        <h1>!!! Home !!!</h1>
        <Link to="/projects">Projects link</Link>
    </div>
)

const Home = ({login}) => {
    return(
        <LoginWrap>
            {login && <HomeComponent/>}
        </LoginWrap>
    );
};

export default connect(stateToProps)(Home);