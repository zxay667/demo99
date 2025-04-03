import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleForgotPassword = () => {
        setShowForgotPassword(true);
        setShowSignup(false);
    };

    const handleSignup = () => {
        setShowSignup(true);
        setShowForgotPassword(false);
    };

    return (
        <div className="login-container">
            {!showForgotPassword && !showSignup && (
                <div>
                    <h2>Login</h2>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>
                    <div className="button-group">
                        <button onClick={handleForgotPassword}>Forgot Password?</button>
                        <button onClick={handleSignup}>Sign Up</button>
                    </div>
                </div>
            )}

            {showForgotPassword && (
                <div>
                    <h2>Forgot Password</h2>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Reset Password</button>
                    </form>
                    <div className="button-group">
                        <button onClick={() => setShowForgotPassword(false)}>Back to Login</button>
                    </div>
                </div>
            )}

            {showSignup && (
                <div>
                    <h2>Sign Up</h2>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Sign Up</button>
                    </form>
                    <div className="button-group">
                        <button onClick={() => setShowSignup(false)}>Back to Login</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;