import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const[signIn, setSignIn] = useState(false)
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
          alt=""
        />
        <button className="loginScreen_button" onClick={()=>setSignIn(true)}> Sign In</button>
        <div className="loginScreen_gradient"/>
        <div className="loginScreen_body">
          {signIn ?(
            <SignupScreen/>
          ):(

            <>
            <h1>Unlimited movies, TV shows and more</h1>
            <h2>watch anywhere, Cancel at any time.</h2>
            <h3>Ready to watch?  Enter your email to create or restart your membership</h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address"/>
                <button className="loginScreen_getStarted" onClick={()=>setSignIn(true)}>
                  GET STARTED
                </button>
              </form>
            </div>
            </>
  
          )}
         
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
