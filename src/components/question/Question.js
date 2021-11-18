import "./Question.css";
import React from "react";
import Answer from "./Answer";

function Question({ object, number }) {
    if (object === null || object === undefined) {
        return <></>;
    }

    const answers = [object.a, object.a1, object.a2, object.a3].sort(
        () => 0.5 - Math.random()
    );

    return (
        <div>
            <p className="number">{number}</p>
            <p className="question">{object && object.q}</p>

            <div className="answersCol">
                {answers.map((answer, i) => (
                    <Answer text={answer} key={i} />
                ))}
            </div>
        </div>
    );
}

export default Question;
