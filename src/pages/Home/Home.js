import "./Home.css";
import React from "react";
import Button from "../../components/button/Button";
import logo from "../../Images/Logo.png";

function Home() {
    return (
        <div className="Home">
            <div className="text">
                <p className="title">Covid Quiz</p>
                <p className="blurb">
                    Test your knowledge, remain safe and informed, and be sure
                    to enjoy!
                </p>
            </div>
            <img src={logo} alt="Covid" className="logo-img" />

            <Button>Let's Begin</Button>
        </div>
    );
}

export default Home;
