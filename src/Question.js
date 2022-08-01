import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
    const [timeRemaining, setTimeRemaining] = useState(15);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeRemaining(timeRemaining - 1)
            if (timeRemaining === 0) {
                setTimeRemaining(15)
                onAnswered(false)
            }
        }, 1000)
        return () => clearTimeout(timer)

    })



    function handleAnswer(isCorrect) {
        setTimeRemaining(15);
        onAnswered(isCorrect);
    }

    const { id, prompt, answers, correctIndex } = question;

    return (
        <>
            <h1>Question {id}</h1>
            <h3>{prompt}</h3>
            {answers.map((answer, index) => {
                const isCorrect = index === correctIndex;
                return (
                    <button key={answer} onClick={() => handleAnswer(isCorrect)}>
                        {answer}
                    </button>
                );
            })}
            <h5>{timeRemaining} seconds remaining</h5>
        </>
    );
}

export default Question;
