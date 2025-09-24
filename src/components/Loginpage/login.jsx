import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Login submitted!");
        // TODO: Add your login logic here (API call / validation)
    };

    return (
        <>
            <div className="container">
                <div className="head">

                     <button className="btn"> student</button>
                     <button  className="btn"> Teacher</button>
                </div>
                <div className="login-container">

                    <h2>Login</h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Login</button>
                    </form>
                    <span>Don't have an account? <Link to="/Signup" className="register-link">
                        Register
                    </Link></span>
                   
                </div>

            </div>
        </>
    );
}

export default Login;
