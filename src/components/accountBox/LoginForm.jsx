import React from 'react'
import './common.css';

function LoginForm() {
    return (
        <div className="bottomContainer">
            <div className="formContainer">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>   
            </div>
            <button style={{margin: "10px 0"}}type="submit">Signin</button>
        </div>
    )
}

export default LoginForm
