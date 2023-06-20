import react from "react";
import "./styles.css";
import { Paper } from "@mui/material";

function LogInSignUp() {
    return(
       <div className="login_overlay">
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
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Log In</button>

                        </form>
                        <div className="login_container__signup_container">
                            <h4>Don't Have An Account?</h4>
                            <button>Sign Up</button>
                        </div>
                    </div>

                </div>
            </div>
       </div> 
    )
}

export default LogInSignUp;