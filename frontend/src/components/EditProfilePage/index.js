import React, { useState } from 'react';
import "./styles.css"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate, Link } from "react-router-dom";
import {Button} from "@mui/material";

function EditProfilePage() {
    const [profilePicture, setProfilePicture] = useState(""); // State to store the image source
    const [interest, setInterest] = useState(""); // State to store the current interest
    const [interestsList, setInterestsList] = useState([]); // State to store the list of interests

    function handleAddInterest() {
        if (interest.trim() !== "") {
            // Only add non-empty interests
            setInterestsList((prevInterests) => [...prevInterests, interest]); // Add the interest to the list
            setInterest(""); // Reset the input field
          }
      }

      const handleInputChange = (event) => {
        setInterest(event.target.value); // Update the current interest as the user types
      };
    // Function to handle the image selection
    const handlePictureChange = (event) => {
      const file = event.target.files[0]; // Get the selected file
      const reader = new FileReader();
  
      reader.onload = (e) => {
        setProfilePicture(e.target.result); // Set the selected image as the profile picture
      };
      
  
      reader.readAsDataURL(file); // Read the file as a data URL

      
      
    };
    const buttonStyle = {
        color: "black",
        border: "none",
    };

    const handleClick = () => {
        navigate(-1, { replace: false });
    };
        const navigate = useNavigate();

    return (
        <div className="editProfile_overlay">
            <div className="editProfile__header">
                <div className="editProfile__header--btn">
                    <Button onClick={handleClick} style={buttonStyle}>
                        <KeyboardBackspaceIcon />
                    </Button>
                </div>
                <div className="editProfile__header--title">

                    <h1>Edit Profile</h1>
                </div>
            </div>
            <div className="editProfileContainer">
                <div className="editProfileContainer__img">
                    <input
                        type="file"
                        id="pictureInput"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handlePictureChange}
                    />
                    <label htmlFor="pictureInput">
                        {profilePicture ? (
                        <img src={profilePicture} alt="Profile" className="profile-picture" />
                        ) : (
                        <div className="editProfileContainer__img--placeholder">
                            <p>Click to Upload Picture</p>
                        </div>
                         )}
                    </label>
                </div>
                <div className="editProfileContainer__input">
                    <div className="editProfileContainer__input--label">

                        <label htmlFor="name">Name</label>
                    </div>
                    <input type="text" id="name" placeholder="Name..." />
                </div>
                <div className="editProfileContainer__input">
                    <div className="editProfileContainer__input--label">

                        <label htmlFor="name">About Me</label>
                    </div>
                    <input type="text" id="about Me" placeholder="About Me..." />
                </div>
                <div className="editProfileContainer__input">
                    <div className="editProfileContainer__input--label">

                        <label htmlFor="name">Location</label>
                    </div>
                    <input type="text" id="location" placeholder="Location..." />
                </div>
                <div className="editProfileContainer__input">
                    <div className="editProfileContainer__input--label">

                        <label htmlFor="name">Favourite Place To Visit</label>
                    </div>
                    <input type="text" id="favourite_place" placeholder="Favourite Place..." />
                </div>
                <div className="editProfileContainer__addAnInterest">
                    <div className="editProfileContainer__addAnInterest-title">
                        <h3>Add An Interest:</h3>
                    </div>
                    <div className="editProfileContainer__addAnInterest-container">
                        <input
                        type="text"
                        placeholder="Type an interest"
                        value={interest}
                        onChange={handleInputChange}
                        />
                    <button onClick={handleAddInterest}>Add</button>
                    </div>
                    
                    <ul className="editProfileContainer__addAnInterest-list">
                        {interestsList.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>

                </div>
                <div className="editProfileContainer__button">
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfilePage;
