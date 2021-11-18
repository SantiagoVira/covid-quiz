import "./Question.css";
import React, { useState } from "react";

function Answer({ text }) {
    const [active, setActive] = useState(false);
    return (
        <div
            onClick={() => {
                setActive(!active);
            }}
            className="answer"
        >
            <div className={`outerCircle  ${active ? "active" : "inactive"}`}>
                <div
                    className={`innerCircle ${active ? "active" : "inactive"}`}
                ></div>
            </div>
            <p>{text}</p>
        </div>
    );
}

export default Answer;
