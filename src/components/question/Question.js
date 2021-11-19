import "./Question.css";
import React, { useEffect, useState } from "react";
import Answer from "./Answer";
import { Button } from "../home";

function shuffleArray(array) {
    let new_array = array.slice();
    for (var i = new_array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = new_array[i];
        new_array[i] = new_array[j];
        new_array[j] = temp;
    }
    return new_array;
}

function Question({ object, number }) {
    const [anyChosen, setAnyChosen] = useState(false);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        setAnswers(
            shuffleArray([object.correct, object.a1, object.a2, object.a3])
        );
    }, [object]);

    if (object === null || object === undefined) {
        return <></>;
    }

    return (
        <div className="questionWrapper">
            <p className="number">{number}</p>
            <p className="question">{object && object.q}</p>

            <div className="answersCol">
                {answers.map((answer, i) => {
                    return (
                        <Answer
                            text={answer}
                            setAnyChosen={setAnyChosen}
                            key={i}
                        />
                    );
                })}
            </div>

            <Button disabled={!anyChosen}>Submit</Button>
        </div>
    );
}

export default Question;
