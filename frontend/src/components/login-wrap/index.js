'use strict';
import {
    Switch,
    Redirect,
    Link 
} from 'react-router-dom';
import { checkLogin } from 'actions';
import { connect } from 'react-redux';

const dispatchToProps = (dispatch) => ({
    checkLogin() {
        dispatch(checkLogin());
    }
});

const stateToProps = ({login}) => ({
    login
});

class LoginComponent extends React.Component {
    logIn() {
        this.props.checkLogin();
    }

    render() {
        return (
            <div>
                <h1>Login Wrap !!!</h1>
                <button onClick={() => {this.logIn()}}>Login btn</button>
            </div>
        )
    }
}

class LoginWrap extends React.Component {
    render() {
        const { login } = this.props;

        return(
            <div>
                {login ? this.props.children : <LoginComponent {...this.props}/>}
            </div>
        );
    }
}

export default connect(stateToProps, dispatchToProps)(LoginWrap);