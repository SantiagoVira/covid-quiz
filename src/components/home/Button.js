import "./Home.css";
import React from "react";

function Button({ children, disabled = false }) {
    return (
        <button className="button" disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;
