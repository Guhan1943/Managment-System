import React from "react";
import "./Login.css";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login submitted!");
    // TODO: Add your login logic here (API call / validation)
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <span>Don't have an account? <a href="/register" className="register-link">
        Register
      </a></span>
      
    </div>
  );
}

export default Login;
