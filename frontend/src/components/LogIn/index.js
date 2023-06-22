import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";




function LogInSignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  function handleSubmit(event) {
    event.preventDefault();
    if ((email === "") || (password === ""))   {
      setError(true);
      return;
    }
    
  }

  const handleErrorClick = (e) => {
    setError(false);
  }


    return(
       <div className="login_overlay">
        {error && 
            <div className="modal-overlay">
                <div 
                    className="error"><p>Require both Email and Password fields. Please try again.</p>
                    <button onClick={handleErrorClick}>Okay!</button>
                </div>
            </div>}
            <div className="header">
                <h1 className="header__title">Welcome To Neighbourhood Nomad</h1>
            </div>
            <div className="login_container">
                <div className="login_container__title">
                    <h3>Log In</h3>
                </div>
                <div className="login_container__formcontainer">
                    
                    <div className="login_container__form">
                        
                        <form>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                value={email}
                                 onChange={handleEmailChange}
                            />
                            <input 
                                type="password" 
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                                
                             />
                            <button type="submit" onClick={handleSubmit}>Log In</button>

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
       </div> 
    )
}

export default LogInSignUp;