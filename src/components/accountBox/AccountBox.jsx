import React, { useState } from 'react';
import { createContext } from 'react';
import './accountBox.css';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import { motion, transform } from "framer-motion";
import SignupForm from './SignupForm';

const BackDrop = styled(motion.div)`
width: 160%;
height: 550px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
transform: rotate(60deg);
top: -290px;
left: -70px;
background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(25,95,212,1) 100%);
`;

const backdropVariants = {
    expanded:{
        width: "223%",
        height: "1050px",
        borderRadius : "20",
        transform: "rotate(60deg)"
    },
    collapsed:{
        width: "160%",
        height: "550px",
        borderRadius : "50",
        transform: "rotate(60deg)"
    }
}
const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
  };

export const AccountContext = createContext();
  

function AccountBox() {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const playExpandingAnimation = () =>{
        setExpanded(true);
        setTimeout(()=>{
            setExpanded(false);
        },expandingTransition.duration * 1000 - 1500);
    }
    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
          setActive("signup");
        }, 400);
      };
    
    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
          setActive("signin");
        }, 400);
    };
    
    const contexValue = {switchToSignin, switchToSignup};
    
    return (
        <AccountContext.Provider value={contexValue}>
        <div className="boxContainer">
            <div className="topContainer">
                <BackDrop 
                initial={false} 
                animate={isExpanded ? "expanded" : "collapsed"} 
                variants ={backdropVariants}
                transition={expandingTransition}/>
                
                {active === "signin" && (
                <div className="headerContainer">
                    <h2 className="headerText">Welcome</h2>
                    <h2 className="headerText">Back!</h2>
                    <h5 className="subText">Please sign-in to continue.</h5>
                </div>
                )}

                {active === "signup" && (
                <div className="headerContainer">
                    <h2 className="headerText">Create</h2>
                    <h2 className="headerText">Account!</h2>
                    <h5 className="subText">Please sign-up to continue!</h5>
                </div>
                )}
            </div>
            <div className="innerContainer">
                {active === "signin" && <LoginForm /> }
                {active === "signup" && <SignupForm/> }
            </div>
        </div>
        </AccountContext.Provider>
    )
}

export default AccountBox
