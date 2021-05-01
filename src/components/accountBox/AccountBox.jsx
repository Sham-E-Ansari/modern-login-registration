import React from 'react'
import './accountBox.css';
import styled from 'styled-components';
import LoginForm from './LoginForm';

function AccountBox() {
    return (
        <div className="boxContainer">
            <div className="topContainer">
                <div className="backDrop" />
                <div className="headerContainer">
                    <h2 className="headerText">Welcome</h2>
                    <h2 className="headerText">Back!</h2>
                    <h5 className="subText">Please sign-in to continue.</h5>
                </div>
            </div>
            <div className="innerContainer">
                <LoginForm />
            </div>
        </div>
    )
}

export default AccountBox
