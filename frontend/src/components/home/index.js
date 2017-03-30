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


const Home = ({match}) => {
    console.log('Home', match)
    return(
        <div>
            <h1>!!! Home !!!</h1>
            <Link to="/projects">Projects link</Link>
        </div>
    );
};

export default connect()(Home);