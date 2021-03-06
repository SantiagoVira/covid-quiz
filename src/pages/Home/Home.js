import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/home";
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
                <p className="info">
                    Answer 5 questions about Covid-19, be sure not to fall for
                    any misinformation!
                </p>
            </div>
            <img src={logo} alt="Covid" className="logo-img" />

            <Link to="/quiz">
                <Button>Let's Begin</Button>
            </Link>
        </div>
    );
}

export default Home;
