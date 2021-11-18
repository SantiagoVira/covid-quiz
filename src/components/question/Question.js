import "./Question.css";
import React, { useEffect } from "react";

function Question({ object, number }) {
    useEffect(() => {
        console.log(object);
    }, [object]);

    if (object === null) {
        return;
    }

    return (
        <div>
            <p>
                {number}
                {object && object.q}
            </p>
        </div>
    );
}

export default Question;
