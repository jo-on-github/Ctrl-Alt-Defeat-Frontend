import React from "react";

function ProfilePage() {
  return (
    <div className="overlay">
      <div className="header">
        <div className="header__btn--back"></div>

        <div className="header__btn--addGuide"></div>

        <div className="profile">
          <div className="profile__title--profileName"></div>

          <div className="profilePicture"></div>
        </div>
      </div>
    </div>
  );
}
