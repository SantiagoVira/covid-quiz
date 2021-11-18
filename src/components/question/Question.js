import "./Question.css";
import React from "react";
import Answer from "./Answer";

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function Question({ object, number }) {
    if (object === null || object === undefined) {
        return <></>;
    }

    const answers = [object.correct, object.a1, object.a2, object.a3];
    shuffleArray(answers);

    return (
        <div>
            <p className="number">{number}</p>
            <p className="question">{object && object.q}</p>

            <div className="answersCol">
                {answers.map((answer, i) => {
                    return <Answer text={answer} key={i} />;
                })}
            </div>
        </div>
    );
}

export default Question;
