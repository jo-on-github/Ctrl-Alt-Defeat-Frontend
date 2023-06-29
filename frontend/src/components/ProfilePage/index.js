import React from "react";
import NavBar from "../NavBar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./styles.css";
import profileImg from "../../assets/profileImg.png";
import { useNavigate, Link } from "react-router-dom";


function ProfilePage({token}) {
    

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
                        <KeyboardBackspaceIcon  />
                    </button>
                </div>

                
            </div>
            <div className="profile">
                <div className="profile__title--profileName">
                    <h1>{token.userFirstName} {token.userSurname}</h1>
                </div>

                <div className="profile__img--profileImg">
                    <img src={profileImg} alt="profileImg" />
                </div>
                <div className="profile__btn--editProfile">
                    <Link to="/ProfilePage/edit">
                        <button>Edit Profile</button>
                    </Link>
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
                    Hi I'm Ben, a 32 year old Vietnamese-British guy living in London. I'm a software engineer and I love to travel. I've been to 20 countries so far and I'm always looking for new places to visit. I'm also a big foodie and love to try new cuisines. I'm a big fan of hiking, pubs and museums. I'm always looking for new people to travel with so feel free to message me if you're interested!
                </p>

                <h4>My local top tips</h4>
                 <p>
                     My favourite places are:
                    Hampsead Heath men's pond, the free screens at Wimbledon during the tennis, and the bars in Dalston.
                 </p>

                 <h4>Location</h4>
                 <p>
                    North-East London: Walthamstow
                 </p>
            </div>
            <div className="profile__footer">
                <NavBar />
            </div>
        </div>
    );
}

export default ProfilePage;
