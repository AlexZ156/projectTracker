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

const LogIn = () => {
    return (
        <div>
            <h1>Log in !!!</h1>
            <Link to="/">Home</Link>
        </div>
    );
};


export default connect()(LogIn);
