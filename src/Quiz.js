import React, { useEffect, useState } from "react";
import Question from "./Question"


function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionId, setCurrentQuestion] = useState(1);
    const [score, setScore] = useState(0);
    const currentQuestion = questions.find((q) => q.id === currentQuestionId);

    useEffect(() => {
        fetch("http://localhost:3000/questions")
            .then((r) => r.json())
            .then((data) => setQuestions(data))
    }, [])

    function handleQuestionAnswered(correct) {
        if (currentQuestionId < questions.length) {
            setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
        } else {
            setCurrentQuestion(null);
        }
        if (correct) {
            setScore((score) => score + 1);
        }
    }

    return (
        <main>
            <section>
                {currentQuestion ? (
                    <Question
                        question={currentQuestion}
                        onAnswered={handleQuestionAnswered}
                    />
                ) : (
                    <>
                        <h1>Game Over</h1>
                        <h2>Total Correct: {score}</h2>
                    </>
                )}
            </section>
        </main>
    );
}

export default Quiz;