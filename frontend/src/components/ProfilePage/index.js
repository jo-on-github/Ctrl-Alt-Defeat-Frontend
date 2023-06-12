import React from "react";
import NavBar from "../NavBar";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import "./styles.css";

function ProfilePage() {

  const iconStyle = {
    fontSize: "36px",
  }

  const buttonStyle = {
    backgroundColor: "white",
    border:"none"
  }

  return (
    <div className="overlay">
      <div className="profileHeader">
        <div className="profileHeader__btn--back">
          <button variant="text" style={buttonStyle}>
            <KeyboardBackspaceIcon style={iconStyle}/>
          </button>
        </div>

        <div className="profileHeader__btn--addGuide">
          <button variant="text" style={buttonStyle}>
            <AddBoxOutlinedIcon style={iconStyle}/>
          </button>
        </div>

        <div className="profile">
          <div className="profile__title--profileName">

          </div>

          <div className="profile__img--profileImg">

          </div>
          <div className="profile__btn--editProfile">

          </div>
        </div>

        <div className="profile__navBar">
          <div className="profile__navBar--personalInfo">

          </div>
          <div className="profile__navBar--interests">

          </div>
          <div className="profile__navBar--guides">

          </div>
        </div>

        <div className="profile__content">

        </div>
      </div>
      <div className="footer">
        
      </div>
    </div>
  );
}

export default ProfilePage;
