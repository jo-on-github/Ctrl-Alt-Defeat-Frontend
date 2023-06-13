import React from "react";
import "./styles.css";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import profileImg from "../../assets/profileImg.png";

function GuideOverview() {
  const buttonStyle = {
    color: "black",
  };

  return (
    <div className="guideOverlay">
      <div className="guideHeader">
        <div className="guideHeader__btn--back">
          <Button style={buttonStyle}>
            <KeyboardBackspaceIcon />
          </Button>
        </div>
        <div className="guideHeader__heading">
          <div className="guideHeader__heading--title">
            <h2>The Duomo</h2>
            <h5>
              By <a href="https://www.w3schools.com">Donald Duck</a>
            </h5>
          </div>
        </div>
        <div className="guideHeader__img--profile">
          <img src={profileImg} alt="profileImg" />
        </div>
      </div>

      <div className="guideSubHeader">
        <div className="guideSubHeader__icon--thumbUp"></div>
        <div className="guideSubHeader__icon--thumbDown"></div>
        <div className="guideSubHeader__icon--pin"></div>
        <div className="guideSubHeader__icon--favourite"></div>
      </div>
    </div>
  );
}

export default GuideOverview;
