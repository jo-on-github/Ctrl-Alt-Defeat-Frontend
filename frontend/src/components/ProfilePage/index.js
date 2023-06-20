import React from "react";
import NavBar from "../NavBar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import "./styles.css";
import profileImg from "../../assets/profileImg.png";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const iconStyle = {
        fontSize: "36px",
    };

    const buttonStyle = {
        backgroundColor: "white",
        border: "none",
    };

    
    const handleClick = () => {
        navigate(-1, { replace: false });
    };
        const navigate = useNavigate();

    return (
        <div className="profileOverlay">
            <div className="profileHeader">
                <div className="profileHeader__btn--back">
                    <button
                        variant="text"
                        style={buttonStyle}
                        onClick={handleClick}
                    >
                        <KeyboardBackspaceIcon style={iconStyle} />
                    </button>
                </div>

                <div className="profileHeader__btn--addGuide">
                    <button variant="text" style={buttonStyle}>
                        <AddBoxOutlinedIcon style={iconStyle} />
                    </button>
                </div>
            </div>
            <div className="profile">
                <div className="profile__title--profileName">
                    <h1>Bob Smith</h1>
                </div>

                <div className="profile__img--profileImg">
                    <img src={profileImg} alt="profileImg" />
                </div>
                <div className="profile__btn--editProfile">
                    <button>Edit Profile</button>
                </div>
            </div>
            <div className="profile__nav">
                <div className="profile__nav--about">
                    <button>About</button>
                </div>
                <div className="profile__nav--interests">
                    <button>Interests</button>
                </div>
                <div className="profile__nav--guides">
                    <button>Guides</button>
                </div>
            </div>
            <div className="profile__info">
                <h4>About Me</h4>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer tincidunt, nisl eget vestibulum aliquam, nunc sapien
                    ultricies tortor, ac aliquam eros nunc vel nisl. Sed vitae
                    nisl eget nunc aliquam ultricies. Sed vitae nisl eget nunc
                    aliquam ultricies. Vestibulum ante ipsum primis in faucibus
                    orci luctus et ultrices posuere cubilia curae; Donec vitae
                    nisl eget nunc aliquam ultricies.
                </p>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer tincidunt, nisl eget vestibulum aliquam, nunc sapien
                    ultricies
                </p>
            </div>
            <div className="profile__footer">
                <NavBar />
            </div>
        </div>
    );
}

export default ProfilePage;
