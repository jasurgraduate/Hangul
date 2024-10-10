import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import '../App.css';
import { questions } from './Questions'; // Adjust the path if necessary
import Results from './Results'; // Import the Results component

const motivationalMessages = [
    "Awesome job! You're a Hangul master! 😸",
    "Keep it up! You're doing great! 🎸",
    "You're on fire! Keep learning it! 🔥",
    "Fantastic! Hangul will be second nature to you! 🐼",
];

// Utility function to shuffle an array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
};

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
    const [message, setMessage] = useState('');
    const [showConfetti, setShowConfetti] = useState(false); // State to control confetti
    const [shuffledQuestions, setShuffledQuestions] = useState([]); // State to hold shuffled questions

    // Initialize audio for correct and incorrect answers
    const correctSound = new Audio(`${process.env.PUBLIC_URL}/sounds/true.mp3`);
    const incorrectSound = new Audio(`${process.env.PUBLIC_URL}/sounds/fail.mp3`);
    incorrectSound.volume = 0.3; // Set volume to 30%

    useEffect(() => {
        const shuffled = shuffleArray(questions.map(question => ({
            ...question,
            options: shuffleArray([...question.options]) // Shuffle options for each question
        })));
        setShuffledQuestions(shuffled);
    }, []);

    const handleAnswer = (option) => {
        if (option === shuffledQuestions[currentQuestion].answer) {
            setScore(score + 1);
            setFeedback("Correct!");
            correctSound.play(); // Play correct answer sound

            // Increment consecutive correct answers
            const newConsecutiveCorrect = consecutiveCorrect + 1;
            setConsecutiveCorrect(newConsecutiveCorrect);

            // Check if they have answered three in a row
            if (newConsecutiveCorrect % 3 === 0) {
                setShowConfetti(true); // Show confetti
                setMessage(motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]);

                // Clear motivational message after 3 seconds
                setTimeout(() => {
                    setMessage('');
                }, 3000);
            }
        } else {
            setFeedback("Incorrect. The correct answer is: " + shuffledQuestions[currentQuestion].answer);
            incorrectSound.play(); // Play incorrect answer sound
            setConsecutiveCorrect(0); // Reset on incorrect answer
            setMessage(''); // Clear the motivational message
        }

        // Immediately move to the next question
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion < shuffledQuestions.length ? nextQuestion : currentQuestion);

        // If there are more questions, set a timeout to clear feedback
        if (nextQuestion < shuffledQuestions.length) {
            setTimeout(() => {
                setFeedback('');
            }, 3000);
        } else {
            setFinished(true);
        }
    };

    const handleConfettiComplete = () => {
        setShowConfetti(false); // Hide confetti after it has finished
    };

    // New function to reset the quiz state
    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setFinished(false);
        setFeedback('');
        setConsecutiveCorrect(0);
        setMessage('');
        setShowConfetti(false); // Reset confetti state

        // Shuffle questions again
        const shuffled = shuffleArray(questions.map(question => ({
            ...question,
            options: shuffleArray([...question.options]) // Shuffle options for each question
        })));
        setShuffledQuestions(shuffled);
    };

    return (
        <div className="quiz-container">
            <header className="quiz-header">
                <h1>
                    Hangul Quiz | <img src={`${process.env.PUBLIC_URL}/wsu.ico`} alt="Woosong University" className="university-icon" />
                </h1>
                {/* Display current quiz number out of total */}
                <div className="quiz-counter">
                    {`${currentQuestion + 1}/${shuffledQuestions.length}`}
                </div>
            </header>

            <main className="quiz-main">
                {showConfetti && (
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
                )}
                {shuffledQuestions.length === 0 ? (
                    <p>Loading questions...</p>
                ) : (
                    finished ? (
                        <div className='res'>
                            <Results score={score} total={shuffledQuestions.length} />
                            <button onClick={restartQuiz} className="restart-button">♻️ Restart Quiz</button>
                        </div>
                    ) : (
                        <div className="quiz-content">
                            <h2 className="question">{shuffledQuestions[currentQuestion].question}</h2>
                            {shuffledQuestions[currentQuestion].options.map((option, index) => (
                                <button key={index} onClick={() => handleAnswer(option)} className="option-button">
                                    {option}
                                </button>
                            ))}
                            {message && <div className="motivational-message">{message}</div>}
                            {feedback && <div className="feedback">{feedback}</div>}
                        </div>
                    )
                )}
            </main>
            <footer className="quiz-footer">
                <p>© 2024 <a href="https://jasurlive.uz" target="_blank" rel="noopener noreferrer">jasurlive.uz</a>. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Quiz;
