import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

function LogInSignUp({users}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Add useNavigate hook
  
  useEffect(() => {
    console.log(email);
  }, [email]);
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  async function handleSubmit(event) {
    event.preventDefault();
    if (email === "" || password === "") {
      setError(true);
      return;
    }
    
    try {
      const response = await fetch("https://ctrl-alt-defeat-backend.onrender.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        console.log("Login successful", token);
        
        // Store the JWT in local storage
        localStorage.setItem("token", token);
        
        // Check if the token has expired
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
        if (decodedToken.exp < currentTime) {
          // Token has expired, perform necessary actions (e.g., logout)
          console.log("Token has expired");
        } else {
          // Token is valid, redirect to the home page or any other desired page
          navigate("/");
        }
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(true);
    }
  }
  
  
  const handleErrorClick = () => {
    setError(false);
  };
  

  return (
    <div className="login_overlay">
      {error && (
        <div className="modal-overlay">
          <div className="error">
            <p>Require both Email and Password fields. Please try again.</p>
            <button onClick={handleErrorClick}>Okay!</button>
          </div>
        </div>
      )}

      <div className="header">
        <h1 className="header__title">Neighbourhood Nomad</h1>
      </div>

      <div className="login_container">
        <div className="header__img--logo">
          <img className="logo__image" src="../image/image-(1).png" alt="logo" />
        </div>

        <h3>Log In</h3>

        <div className="login_container__form">
          <form>
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit" onClick={handleSubmit}>
              Log In
            </button>
          </form>
          <div className="login_container__signup_container">
            <h4>Don't Have An Account?</h4>
            <Link to="/login/signup">
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInSignUp;
