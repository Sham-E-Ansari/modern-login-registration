import React, { useContext } from 'react'
import './common.css';
import {AccountContext} from './AccountBox';
function SignupForm() {
    const { switchToSignin } = useContext(AccountContext);
    return (
        <div className="bottomContainer">
            <div className="formContainer">
                <input type="text" placeholder="Full name"/>
                <input type="text" placeholder="Mobile no."/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>   
            </div>
            <button style={{margin: "10px 0"}}type="submit">Signup</button>
            <p className="mutedLink">Already have an account? 
            <a onClick={switchToSignin} className="boldLink" href="#">Sign in</a></p>
        </div>
    )
}

export default SignupForm
