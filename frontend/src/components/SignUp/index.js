import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./styles.css";

function SignUp({ allUsers }) {

  const [emailExists, setEmailExists] = useState(false); // Email exists flag
  const [fieldsFilled, setFieldsFilled] = useState(false); // All fields filled flag

  const handleErrorClick = () => {
    setEmailExists(false);
  };
  const handleEmptyFieldsClick = () => {
    setFieldsFilled(false);
  };

  

  const buttonStyle = {
    color: "black",
    position: "relative",
    right: "10%",
  };

  const navigate = useNavigate();
    const location = useLocation();
    const handleClick = () => {
        if (location.pathname === '/home' ) {
            navigate('/'); 
          } else {
            navigate(-1, { replace: true });
          }
    };

    const [submissionSuccess, setSubmissionSuccess] = useState(false); // Form submission success flag
    const [formData, setFormData] = useState({ // Form data in the structure of the schema defined in the backend
      email: '',
      firstName: '',
      surname: '',
      dateOfBirth: '',
      password: '',
      location: ''
    });

    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        return response.json();
      }

    // Updates form data by adding new key-value pair using the input name and value
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleSubmit = async (e) => {

        e.preventDefault(); // preventDefault prevents the default behaviour of the form which is to refresh the page on submission
        // Check if email already exists
        const emailExists = allUsers.some((user) => user.email === formData.email);
        if (emailExists) {
          setEmailExists(true);
          setFormData({
            email: '',
            firstName: '',
            surname: '',
            dateOfBirth: '',
            password: '',
            location: ''
          });
          return;
        }
        
        // make sure all fields are filled in
        if (!formData.email || !formData.firstName || !formData.surname || !formData.dateOfBirth || !formData.password || !formData.location) {

          setFieldsFilled(true);
          setFormData({
            email: '',
            firstName: '',
            surname: '',
            dateOfBirth: '',
            password: '',
            location: ''
          });
          return;

        }
        try {
          // Make POST request to /users endpoint and pass form data state as the body
          const response = await postData('https://ctrl-alt-defeat-backend.onrender.com/users', formData);
          console.log(response);
          // Set submission success flag
          setSubmissionSuccess(true);
          // Reset form data
          setFormData({
            email: '',
            firstName: '',
            surname: '',
            dateOfBirth: '',
            password: '',
            location: ''
          });
        } catch (error) {
          console.error(error);
          // Show error prompt
          alert('Signup submission failed. Please try again.');
        }
      };

    return(
         <div className="signup_overlay">
            {emailExists && (
              <div className="modal-overlay">
                  <div className="error">
                      <p>Account with this Email already exists. Please enter a different Email.</p>
                      <button onClick={handleErrorClick}>Okay!</button>
                  </div>
            </div>
            )}
            {fieldsFilled && (
              <div className="modal-overlay">
                  <div className="error">
                      <p>Please fill in all fields and try again.</p>
                      <button onClick={handleEmptyFieldsClick}>Okay!</button>
                  </div>
            </div>
            )}
            <div className="signup__header">
                <div className="header__btn--back">
                <Button style={buttonStyle} onClick={handleClick}>
                    <KeyboardBackspaceIcon />
                </Button>
                </div>
                <h1 className="header__title">Welcome To Neighbourhood Nomad</h1>
            </div>
            <div className="signup_container">
                <div className="signup_container__title">
                    <h3>Create an account</h3>
                </div>
                <div className="signup_container__formcontainer">


                    <div className="signup_container__form">
                    <form>
                        <input 
                            type="text" 
                            placeholder="First Name" 
                            value={formData.firstName}
                            name="firstName"
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            placeholder="Surname" 
                            value={formData.surname}
                            name="surname"
                            onChange={handleChange}
                         />
                        <input 
                            type="date" 
                            placeholder="Date of Birth"
                            value={formData.date}
                            name="dateOfBirth"
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            placeholder="Location"
                            value={formData.location}
                            name="location"
                            onChange={handleChange} 
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={formData.email}
                            name="email"
                            onChange={handleChange}
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={formData.password}
                            name="password"
                            onChange={handleChange}
                        />

                          <div className="signup_container__btn">
                                <button className="submitButton" type="submit" onClick={handleSubmit}>Sign Up</button>
                          </div>

                        {submissionSuccess && 
                            <p className="success-message">Form submitted successfully!</p>}
                        </form>
                    </div>
                </div>
            </div>
         </div>
    )

}

export default SignUp;