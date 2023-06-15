import React from "react";
import "./styles.css";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import profileImg from "../../assets/profileImg.png";
import cath from "../../assets/cath.png";
import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";

function GuideOverview() {
  const buttonStyle = {
    color: "#444445",
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
        <div className="guideSubHeader__icons">
          <div className="guideSubHeader__icons--thumbUp">
            <ThumbUpAltOutlinedIcon style={buttonStyle} />
            <span className="guideSubHeader__icons--thumbUpRating">88%</span>
          </div>
          <div className="guideSubHeader__icons--thumbDown">
            <ThumbDownAltOutlinedIcon style={buttonStyle} />
            <span className="guideSubHeader__icons--thumbDownRating">12%</span>
          </div>
        </div>
        <div className="guideSubHeader__additionalIcons">
          <div className="guideSubHeader__additionalIcons--pin">
            <PushPinOutlinedIcon style={buttonStyle} />
          </div>
          <div div className="guideSubHeader__additionalIcons--favourite">
            <BookmarkBorderOutlinedIcon style={buttonStyle} />
          </div>
        </div>
      </div>
      <div className="guide__img">
        <img src={cath} alt="cath" />
      </div>
      <div className="middleNavBar">
        <div className="middleNavBar__btn--overview">
          <button>Overview</button>
        </div>
        <div className="middleNavBar__btn--experience">
          <button>Experience</button>
        </div>
        <div className="middleNavBar__btn--reviews">
          <button>Reviews</button>
        </div>
      </div>
      <div className="Callums-baby">
        <Outlet />
      </div>

      <NavBar />
    </div>
  );
}

export default GuideOverview;
