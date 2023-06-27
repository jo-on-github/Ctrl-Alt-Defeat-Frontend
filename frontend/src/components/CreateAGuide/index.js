

import React, { useState } from 'react';

import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./styles.css";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar";

function CreateAGuide({ imageUrl, altText, token, getCity }) {
  const buttonStyle = {
    color: "black",
  };

  const [guideImage, setGuideImage] = useState(""); // State to store the image source

  const [submissionSuccess, setSubmissionSuccess] = useState(false); // Form submission success flag
  const [formData, setFormData] = useState({
    // Form data in the structure of the schema defined in the backend
    city: `${token.userLocation}`,
    title: "",
    author: `${token.userFirstName} ${token.userSurname}`,
    location: "",
    imageURL: "",
    overview: "",
    experience: "",
    activityType: "foodanddrink",
    userId: `${token.userId}`,
    budget: "",
    highlights: "",
  });

  async function postGuide(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response was not in JSON format");
    }
    return response.ok;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  // Updates form data by adding new key-value pair using the input name and value
  const handleSubmit = async (e) => {
    e.preventDefault(); // preventDefault prevents the default behaviour of the form which is to refresh the page on submission

    try {
      // Make POST request to /users endpoint and pass form data state as the body
      const response = await postGuide("http://localhost:4000/guide", formData);
      console.log(response);
      // Get city data to update the city page
      getCity(token.userLocation);
      // Set submission success flag
      setSubmissionSuccess(true);
      // Reset form data
      setFormData({
        city: `${token.location}`,
        title: "",
        author: `${token.firstName} ${token.surname}`,
        location: "",
        imageURL: "",
        overview: "",
        experience: "",
        activityType: "",
        userId: `${token._id}`,
        budget: "",
        highlights: "",
      });
    } catch (error) {
      console.error(error);
      // Show error prompt
      alert("Guide submission failed. Please try again.");
    }

      finally{
      navigate('/home');
    }
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
    const newHighlights = [...highlights, inputValue];
    setHighlights(newHighlights);
    setFormData({ ...formData, highlights: newHighlights });
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
      const newHighlights = [...highlights, inputValue];
      console.log(newHighlights);
      setHighlights(newHighlights);
      console.log(highlights);
      setFormData({ ...formData, highlights: newHighlights });
      setInputVisible(false);
      setInputValue("");
    }
  };

  const handleCancel = () => {
    setInputVisible(false);
    setInputValue("");
  };

  const handleGoBack = () => {
    if (location.pathname === "/home") {
      navigate("/");
    } else {
      navigate(-1, { replace: true });
    }
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    const reader = new FileReader();

    reader.onload = (e) => {
      setGuideImage(e.target.result); // Set the selected image as the profile picture
    };
  };

  return (
    <div className="createAGuide_Overlay">
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
      <div className="main_gO">
        <div className="main__form">
          <form>
            <div className="main__form--input">

              <label htmlFor="title">Share an experience...</label>
              <input
                id="title"
                type="text"
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="main__form--input">
              <label htmlFor="summary">Summary</label>
              <input
                id="summary"
                type="text"
                placeholder="Summary"
                name="overview"
                value={formData.overview}
                onChange={handleChange}
              />
            </div>
            <div className="main__form--input">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                type="text"
                placeholder="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="main__form--input">
              <label htmlFor="imageURL">Insert image URL</label>
              <input
                id="imageURL"
                type="text"
                placeholder="imageURL"
                name="imageURL"
                value={formData.imageURL}
                onChange={handleChange}
              />

            </div>

            <div className="main__form--dropdown">
              <div className="form__dropdown--title">
                <h3> Type Of Activity: </h3>
              </div>
              <div className="form__dropdown--options">
                <select
                  value={formData.activityType}
                  name="activityType"
                  onChange={handleChange}
                >
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
                <input
                  type="radio"
                  id="budget1"
                  name="budget"
                  value="budget1"
                  checked={formData.budget === "budget1"}
                  onChange={handleChange}
                />

                <label htmlFor="budget2">££</label>
                <input
                  type="radio"
                  id="budget2"
                  name="budget"
                  value="budget2"
                  checked={formData.budget === "budget2"}
                  onChange={handleChange}
                />

                <label htmlFor="budget3">£££</label>
                <input
                  type="radio"
                  id="budget3"
                  name="budget"
                  value="budget3"
                  checked={formData.budget === "budget3"}
                  onChange={handleChange}
                />

                <label htmlFor="budget4">££££</label>
                <input
                  type="radio"
                  id="budget4"
                  name="budget"
                  value="budget4"
                  checked={formData.budget === "budget4"}
                  onChange={handleChange}
                />

                <label htmlFor="budget5">£££££</label>
                <input
                  type="radio"
                  id="budget5"
                  name="budget"
                  value="budget5"
                  checked={formData.budget === "budget5"}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="main__form--highlight">
              <div className="form__highlight--title">
                <h3> Add A Highlight (Up To 4): </h3>
              </div>
              {inputVisible ? (
                <div className="form__highlight--input">
                  <input
                    className="form__highlight--text"
                    type="text"
                    placeholder="Enter a highlight"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                  />
                  <Button onClick={handleCancel}>Cancel</Button>
                </div>
              ) : (
                <div className="highlightBtnDiv">
                  <button className='form__highlight--btn' onClick={handleClick}>Add Highlight</button>
                </div>
              )}
              <div className="form__highlight--list">
                <ul>
                  {highlights.map((highlight, index) => (
                    <li key={index}>
                      {highlight}{" "}

                      <button
                        className="deleteHighlightButton"
                        onClick={() => deleteHighlight(index)}
                      >
                        X
                      </button>

                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="main__form--experience">
              <div className="form__experience--title">
                <h3>Write About Your Experience: </h3>
              </div>
              <div className="form__experience--textArea">

                <textarea className="form__experience--textAreaBox"></textarea>

                  id="experience"
                  placeholder="Write about your experience here..."
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="main__form--submit">
              <button onClick={handleSubmit}>Submit</button>

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
