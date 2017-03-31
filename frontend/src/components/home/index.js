'use strict';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect,
    Link 
} from 'react-router-dom';
import { connect } from 'react-redux';
import LoginWrap from '../login-wrap';
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

const stateToProps = ({login}) => ({
    login
});

const HomeComponent = () => (
    <div>
        {console.log(33333)}
        <h1>!!! Home !!!</h1>

        <button onClick={() => {
            console.log(11)
            console.log(browserHistory)
            browserHistory.push('/projects')
        }}>Projects link</button>
        <Link to="/projects">Projects link</Link>
    </div>
)

const Home = ({match, login}) => {
    return(
        <LoginWrap>
            {login && <HomeComponent/>}
        </LoginWrap>
    );
};

export default connect(stateToProps)(Home);