import React from 'react';
import { Link } from 'react-router-dom';

import './CSS/LoginPage.css';

const LoginPage = () => {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://extenship.com/img/logo/Amazon_logo.svg" alt="Logo" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default LoginPage
