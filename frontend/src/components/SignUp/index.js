import react from "react";
import "./styles.css";

function SignUp() {

    return(
         <div className="signup_overlay">
            <div className="header">
                <h1 className="header__title">Welcome To Neighbourhood Nomad</h1>
            </div>
            <div className="signup_container">
                <div className="signup_container__title">
                    <h3>Sign Up</h3>
                </div>
                <div className="signup_container__formcontainer">


                    <div className="signup_container__form">
                    <form>
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Surname" />
                        <input type="date" placeholder="Date of Birth" />
                        <input type="text" placeholder="Location" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <button type="submit">Sign Up</button>

                    </form>

                    </div>
                </div>
            </div>
         </div>
    )

}

export default SignUp;