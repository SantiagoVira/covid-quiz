import "./Button.css";
import React from "react";

function Button({ children }) {
    return <button className="button">{children}</button>;
}

export default Button;
