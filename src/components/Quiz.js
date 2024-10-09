import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import '../App.css';
import { questions } from './Questions'; // Adjust the path if necessary

const motivationalMessages = [
    "Awesome job! You're a Hangul master! 😸",
    "Keep it up! You're doing great! 🎸",
    "You're on fire! Keep learning it! 🔥",
    "Fantastic! Hangul will be second nature to you! 🐼",
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const [message, setMessage] = useState('');

    const handleAnswer = (option) => {
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
            setFeedback("Correct!");

            // Increment consecutive correct answers
            const newConsecutiveCorrect = consecutiveCorrect + 1;
            setConsecutiveCorrect(newConsecutiveCorrect);

            // Check if they have answered three in a row
            if (newConsecutiveCorrect % 3 === 0) {
                setShowConfetti(true);
                setMessage(motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]);
            }
        } else {
            setFeedback("Incorrect. The correct answer is: " + questions[currentQuestion].answer);
            setConsecutiveCorrect(0); // Reset on incorrect answer
            setMessage(''); // Clear the motivational message
        }

        if (currentQuestion < questions.length - 1) {
            setTimeout(() => {
                setCurrentQuestion(currentQuestion + 1);
                setFeedback('');
            }, 2000);
        } else {
            setFinished(true);
        }
    };

    const handleConfettiComplete = () => {
        setShowConfetti(false); // Hide confetti after it has finished
        setMessage(''); // Clear motivational message
    };

    return (
        <div className="quiz-container">
            <header className="quiz-header">
                <h1>
                    Hangul Quiz | <img src={`${process.env.PUBLIC_URL}/wsu.ico`} alt="Woosong University" className="university-icon" />
                </h1>
            </header>

            <main className="quiz-main">
                {showConfetti &&
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        numberOfPieces={800}
                        initialVelocityX={5}
                        initialVelocityY={20}
                        colors={['#ff0a0a', '#0a0eff', '#0aff0a']}
                        gravity={0.2}
                        recycle={false}
                        onConfettiComplete={handleConfettiComplete}
                    />
                }
                {finished ? (
                    <div className="results">
                        <h2>Your Score: {score}/{questions.length}</h2>
                        <Link to="/"><button className="restart-button">Restart</button></Link>
                    </div>
                ) : (
                    <div className="quiz-content">
                        <h2 className="question">{questions[currentQuestion].question}</h2>
                        {questions[currentQuestion].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswer(option)} className="option-button">
                                {option}
                            </button>
                        ))}
                        {feedback && <div className="feedback">{feedback}</div>}
                        {message && <div className="motivational-message">{message}</div>} {/* Display motivational message */}
                    </div>
                )}
            </main>
            <footer className="quiz-footer">
                <p>© 2024  <a href="https://jasurlive.uz" target="_blank" rel="noopener noreferrer">jasurlive.uz</a>. All rights reserved.</p>

            </footer>
        </div>
    );
};

export default Quiz;
