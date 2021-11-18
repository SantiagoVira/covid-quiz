import "./Quiz.css";
import React, { useEffect, useState } from "react";
import Questions from "./Questions.json";
import { Question } from "../../components/question";

function Quiz() {
    const [completed, setCompleted] = useState(0);
    // const [score, setScore] = useState(0);
    const [chosen, setChosen] = useState([]);
    useEffect(() => {
        setChosen(Questions.sort(() => 0.5 - Math.random()).slice(0, 5));
    }, []);

    return (
        <div>
            <Question
                object={chosen[0]}
                number={completed + 1}
                completed={() => setCompleted(completed + 1)}
            />
        </div>
    );
}

export default Quiz;
