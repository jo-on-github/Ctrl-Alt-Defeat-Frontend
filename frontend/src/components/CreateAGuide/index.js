import React, { useState } from 'react';
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./styles.css";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar";

function CreateAGuide({ imageUrl, altText }) {
  const buttonStyle = {
    color: "black",
  };

  const navigate = useNavigate();
  const location = useLocation();

  const [highlights, setHighlights] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setInputVisible(true);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (newValue !== inputValue) {
      setInputValue(newValue);
    }
  };

  const addHighlight = () => {
    setHighlights((prevHighlights) => [...prevHighlights, inputValue]);
  };

  const deleteHighlight = (index) => {
    setHighlights((prevHighlights) => {
      const updatedHighlights = [...prevHighlights];
      updatedHighlights.splice(index, 1);
      return updatedHighlights;
    });
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter" && inputValue !== "") {
      addHighlight();
      setInputVisible(false);
      setInputValue("");
    }
  };

  const handleCancel = () => {
    setInputVisible(false);
    setInputValue("");
  };

  const handleGoBack = () => {
    if (location.pathname === '/home') {
      navigate('/');
    } else {
      navigate(-1, { replace: true });
    }
  };

  return (
    <div className="createAGuide_Overlay">
      <div className="createAGuideHeader">
        <Paper
          sx={{ position: "fixed", top: 0, left: 0, right: 0 }}
          elevation={3}
          className="navBar__top"
        >
          <div className="navBar__top--back">
            <Button style={buttonStyle} onClick={handleGoBack}>
              <KeyboardBackspaceIcon />
            </Button>
          </div>
          <div className="navBar__top--title">
            <h1>Create A Guide</h1>
          </div>
          <div className="navBar__top--image">
            <NavLink to="/ProfilePage" activeClassName="active">
              <img src={imageUrl} alt={altText} />
            </NavLink>
          </div>
        </Paper>
      </div>
      <div className="main_gO">
        <div className="main__form">
          <form>
          <div>
            <div className="main__form--input">
              <label className="title" htmlFor="title">Share an experience..</label>
              <input id="title" type="text" placeholder="Title" />
            </div>
            <div className="main__form--input">
            
              <input id="summary" type="text" placeholder="Summary" />
            </div>
            <div className="main__form--input">

              <input id="location" type="text" placeholder="Location" />
            </div>
            </div>
            <div className="main__form--dropdown">
              <div className="form__dropdown--title">
                <h3> Type Of Activity: </h3>
              </div>
              <div className="form__dropdown--options">
                <select>
                  <option value="foodanddrink">Food & Drink</option>
                  <option value="sightseeing">Sightseeing</option>
                  <option value="historical">Historical</option>
                  <option value="nightlife">Nightlife</option>
                  <option value="nature">Nature</option>
                  <option value="entertainment">Entertainment</option>
                </select>
              </div>
            </div>
            <div className="main__form--budget">
              <div className="form__budget--title">
                <h3> Budget: </h3>
              </div>
              <div className="form__budget--radio">
                <label htmlFor="budget1">£</label>
                <input type="radio" id="budget1" name="budget" value="budget1" />

                <label htmlFor="budget2">££</label>
                <input type="radio" id="budget2" name="budget" value="budget2" />

                <label htmlFor="budget3">£££</label>
                <input type="radio" id="budget3" name="budget" value="budget3" />

                <label htmlFor="budget4">££££</label>
                <input type="radio" id="budget4" name="budget" value="budget4" />

                <label htmlFor="budget5">£££££</label>
                <input type="radio" id="budget5" name="budget" value="budget5" />
              </div>
            </div>
            <div className="main__form--highlight">
              <div className="form__highlight--title">
                <h3> Add A Highlight (Up To 4): </h3>
              </div>
              {inputVisible ? (
                <div className="form__highlight--input">
                  <input className="form__highlight--text"
                    type="text"
                    placeholder="Enter a highlight"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                  />
                  <Button onClick={handleCancel}></Button>
                </div>
              ) : (
                <div className="highlightBtnDiv">
                  <button className='form__highlight--btn' onClick={handleClick}>Add Highlight</button>
                </div>
              )}
              <div className="form__highlight--list">
                <ul >
                  {highlights.map((highlight, index) => (
                    <li key={index}>{highlight} <button className="deleteHighlightButton" onClick={() => deleteHighlight(index)}>X</button></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="main__form--experience">
                <div className="form__experience--title">
                    <h3>Write About Your Experience: </h3>
                </div>
                <div>
                    <textarea className="form__experience--textArea" ></textarea>
                </div>
            </div>
            <div className="main__form--submit">
                <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer">
        <NavBar />
      </div>
    </div>
  );
}

export default CreateAGuide;