import React from 'react';
import './LandingPage.css'
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';

const LandingPage = ({ loginForm, setLoginForm }) => {

    let session;
    if (loginForm) {
        session = (
            <LoginForm loginForm={loginForm} setLoginForm={setLoginForm} />
        )
    } else {
        session = (
            <SignUpForm loginForm={loginForm} setLoginForm={setLoginForm} />
        )
    }

    return (
        <div className='landing-page-body'>
            <div className='landing-page-container'>
                <img className="landing-page-dog" alt="doggo" src="https://petsagrambucket.s3.amazonaws.com/a2031b33f8e24aac93bb8af79001cb3a.png" />
                {session}
            </div>
        </div>
    );
};

export default LandingPage;
