import React, { useContext } from 'react'
import './common.css';
import {AccountContext} from './AccountBox';
function LoginForm() {
    const { switchToSignup } = useContext(AccountContext);
    return (
        <div className="bottomContainer">
            <div className="formContainer">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>   
            </div>
            <button style={{margin: "10px 0"}}type="submit">Signin</button>
            <p className="mutedLink">Don't have an account? <a className="boldLink"
            onClick={switchToSignup} href="#">Sign Up</a></p>
        </div>
    )
}

export default LoginForm
