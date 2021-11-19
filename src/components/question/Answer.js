import "./Question.css";
import React, { useEffect, useState } from "react";

function Answer({ text, setAnyChosen }) {
    const [active, setActive] = useState(false);
    useEffect(() => {}, [active]);
    return (
        <div
            className="answer"
            onClick={() => {
                if (active === false) {
                    setActive(true);
                    setAnyChosen(true);
                }
            }}
        >
            <label className="container">
                <input
                    type="radio"
                    className="radio"
                    name="radio"
                    checked={active}
                    readOnly
                />
                <div className="outerCircle">
                    <div className="innerCircle" />
                </div>
            </label>

            <p>{text}</p>
        </div>
    );
}

export default Answer;
