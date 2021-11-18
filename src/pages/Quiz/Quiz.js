import "./Quiz.css";
import React, { useEffect, useState } from "react";
import Questions from "./Questions.json";
import Question from "../../components/question/Question";

const choose = (used, setUsed) => {
    let index;
    while (true) {
        let temp = Math.floor(Math.random() * Questions.length);
        if (used.findIndex((item) => item === temp) < 0) {
            index = temp;
            break;
        }
    }

    setUsed([...used, index]);
    console.log(Questions[index]);
    return Questions[index];
};

function Quiz() {
    const [used, setUsed] = useState([]);
    // const [completed, setCompleted] = useState(0);
    // const [score, setScore] = useState(0);
    const [chosen, setChosen] = useState("");
    useEffect(() => {
        setChosen(choose(used, setUsed));
    }, []);

    return (
        <div>
            <Question object={chosen} number={used.length} />
        </div>
    );
}

export default Quiz;
