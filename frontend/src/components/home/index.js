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


const Home = () => {
    return(
        <div>
            <h1>!!! Home !!!</h1>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default connect()(Home);