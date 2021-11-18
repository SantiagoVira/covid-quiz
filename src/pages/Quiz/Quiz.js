import "./Quiz.css";
import React, { useEffect, useState } from "react";
import Questions from "./Questions.json";
import Question from "../../components/question/Question";

// const choose = (used, setUsed) => {
//     let index;
//     while (true) {
//         let temp = Math.floor(Math.random() * Questions.length);
//         if (used.findIndex((item) => item === temp) < 0) {
//             index = temp;
//             break;
//         }
//     }

//     setUsed([...used, index]);
//     console.log(Questions[index]);
//     return Questions[index];
// };

function Quiz() {
    // const [used, setUsed] = useState([]);
    const [completed, setCompleted] = useState(0);
    // const [score, setScore] = useState(0);
    const [chosen, setChosen] = useState([]);
    useEffect(() => {
        let already_chosen = [];
        let chosen_questions = [];
        for (let i = 0; i < 5; i++) {
            let index;
            while (true) {
                let temp = Math.floor(Math.random() * Questions.length);
                if (already_chosen.findIndex((item) => item === temp) < 0) {
                    index = temp;
                    break;
                }
            }

            already_chosen.push(index);
            chosen_questions.push(Questions[index]);
        }

        setChosen(chosen_questions);
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
