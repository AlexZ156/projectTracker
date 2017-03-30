'use strict';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect,
    Link 
} from 'react-router-dom';
import { getMainData, loginHandler } from 'actions';
import { connect } from 'react-redux';
const isLogined = true;

const LoginComponent = () => (

    <div>
        <Redirect to="/login"/>
        <h1>Log in !!!</h1>
    </div>
);

/*const LogIn = ({children, match, location}) => {
    // isLogined && dispatch(getMainData);
    console.log('LogIn', match)
    return (
        <div>
            <h1>Login !!!!</h1>
            <Link to="/">Home</Link>
        </div>
    );
};*/

const stateToProps = ({login}) => ({
    login
});

const dispatchToProps = (dispatch) => {
    return {
        loginHandler() {
            dispatch(loginHandler())
        }
    };
};

class LogIn extends React.Component {
    logIn() {
        this.props.loginHandler();
        const { login, history, match } = this.props;
        console.log('Redirect')
        {history.replace('/')}
    }
    shouldComponentUpdate() {
        const { history, match } = this.props;
        
        console.log(match.path)
        

        return match.path !== '/login';
    }
    componentWillMount() {
        const { history, match } = this.props;
        console.log(1111)
        // if (match.path !== '/login') {
        //     history.replace('/login')
        // }
    }
    render() {
        const { login, history, match } = this.props;
        console.log('LogIn', this.props.match)
        // {history.replace('/login')}


        

        return(
            <div>
                {
                    login ? <Redirect push to="/"/> : <div>
                        <h1>Login !!!!</h1>
                        <button onClick={() => {this.logIn()}}>Login btn</button>
                    </div>
                }
            </div>
        )
    }
}


export default connect(stateToProps, dispatchToProps)(LogIn);
