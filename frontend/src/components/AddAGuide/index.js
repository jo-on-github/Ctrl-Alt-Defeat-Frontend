import React from "react";

function AddAGuide() {
  return (
    <div className="overlay">
      <div className="header">
        <div className="header__btn--back"></div>
        <div className="header__marker"></div>
        <div className="header__title"></div>
        <div className="header__btn--profile"></div>
      </div>
      <form className="form">
        <label className="form__title">
          Title:
          <input type="text" />
        </label>

        <label className="form__summary">
          Summary:
          <input type="text" />
        </label>

        <label className="form__location">
          Location:
          <input type="text" />
        </label>

        <label className="form__location">
          Type of activity:
          <input type="text" />
        </label>

        <div className="form__activityType"></div>

        <div className="form__budget"></div>

        <label className="form__bestTime">
          Best time to visit:
          <input type="text" />
        </label>

        <label className="form__highlights">
          Highlights:
          <input type="text" />
        </label>

        <label className="form__googlelink">
          Google Link:
          <input type="text" />
        </label>

        <label className="form__experience">
          Write about your experience:
          <input type="text" />
        </label>

        <div className="form__img--uploadPicture"></div>

        <div className="form__btn--submit">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="footer"></div>
    </div>
  );
}

export default AddAGuide;
