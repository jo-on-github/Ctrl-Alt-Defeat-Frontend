import React from "react";
import "./styles.css";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import profileImg from "../../assets/profileImg.png";
import NavBar from "../NavBar";
import { NavLink, Outlet } from "react-router-dom";
import { Paper } from "@mui/material";
import { useParams } from "react-router-dom";


function GuideOverview({chosenCity, setChosenCity}) {
  const buttonStyle = {
    // color: "#444445",
    color: "#0D0D0D",
  };

  const {id} = useParams();

  const selectedItem = chosenCity.find(item => item._id === id);
  console.log(chosenCity);

  const selectedItemId = selectedItem ? selectedItem._id : null;

  return (
    <div className="guideOverlay">
      <Paper
        sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}
        elevation={3}
        className="guideHeader"
      >
        {/* <div className="guideHeader"> */}
        <div className="guideHeader__btn--back">
          <NavLink to ="/home" activeClassName="active"> 
          <Button style={buttonStyle}>
            <KeyboardBackspaceIcon />
          </Button>
          </NavLink>
        </div>
        <div className="guideHeader__heading">
          <div className="guideHeader__heading--title">
            <h2>{selectedItem.title}</h2>
          <div className="guideHeader__heading--author">
            <h5>
              By {selectedItem.author}
            </h5>
          </div>
          </div>
        </div>
        <div >
          <NavLink to="/ProfilePage" activeClassName="active">
          <img className="guideHeader__img--profile" src={profileImg} alt="profileImg" />
          </NavLink>
        </div>
        {/* </div> */}
      </Paper>

      <div className="guideSubHeader">
        <div className="guideSubHeader__icons">
        </div>
        <div className="guideSubHeader__additionalIcons">
          
          <div div className="guideSubHeader__additionalIcons--favourite">
            <BookmarkBorderOutlinedIcon sx={{position: "relative", top: "1em"}} />
          </div>
        </div>
      </div>
      <div className="guide__img">
        <img src={selectedItem.imageURL} alt="cath" />
      </div>
      <div className="middleNavBar">
        <div className="middleNavBar__btn--overview">
       
          <NavLink to={`/guide/${selectedItemId}/overview`} activeClassName="active" className="guideActive" >
            <button>Overview</button>
          </NavLink>
        
        </div>
        <div className="middleNavBar__btn--experience">
          <NavLink to={`/guide/${selectedItemId}/experience`} activeClassName="active" className="guideActive">
            <button>Experience</button>
          </NavLink>
        </div>
        <div className="middleNavBar__btn--location">
        
          <NavLink to={`/guide/${selectedItemId}/location`} activeClassName="guideactive" className="guideActive">
            <button>Location</button>

          </NavLink>
        
        </div>
        
      </div>
      <Outlet />

      <NavBar />
    </div>
  );
}

export default GuideOverview;
