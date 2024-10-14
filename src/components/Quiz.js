import React, { useState } from 'react';
import Confetti from 'react-confetti';
import '../App.css';
import { questions } from './Questions'; // Adjust the path if necessary
import Results from './Results'; // Import the Results component
import Cert from './Cert'; // Import the Cert component

const motivationalMessages = [
    "Awesome job! You're a Hangul master! 😸",
    "Keep it up! You're doing great! 🎸",
    "You're on fire! Keep learning it! 🔥",
    "Fantastic! Hangul will be second nature to you! 🐼",
];

// Group questions into stages
const stages = [
    questions.slice(0, 3), // Stage 1: First 3 questions
    questions.slice(3, 9), // Stage 2: Next 6 questions
    questions.slice(9, 20), // Stage 3: Next 11 questions
    questions.slice(20, 32), // Stage 4: Next 12 questions
    questions.slice(32, 44), // Stage 5: Next 12 questions
    questions.slice(44, 54), // Stage 6: Next 13 questions
];

const Quiz = () => {
    const [currentStage, setCurrentStage] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0); // This will be the cumulative score across all stages
    const [feedback, setFeedback] = useState('');
    const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
    const [message, setMessage] = useState('');
    const [showConfetti, setShowConfetti] = useState(false);
    const [stageFinished, setStageFinished] = useState(false);
    const [showCertificate, setShowCertificate] = useState(false); // State for showing the certificate

    // Calculate total number of questions
    const totalQuestions = stages.reduce((acc, stage) => acc + stage.length, 0);

    // Calculate total questions answered so far
    const questionsAnswered = currentStage * stages[currentStage].length + currentQuestionIndex;

    // Calculate total questions left
    const totalQuestionsLeft = totalQuestions - questionsAnswered;

    // Initialize audio for correct and incorrect answers
    const correctSound = new Audio(`${process.env.PUBLIC_URL}/sounds/true.mp3`);
    const incorrectSound = new Audio(`${process.env.PUBLIC_URL}/sounds/fail.mp3`);
    incorrectSound.volume = 0.3; // Set volume to 30%

    const handleAnswer = (option) => {
        const currentQuestion = stages[currentStage][currentQuestionIndex];

        if (option === currentQuestion.answer) {
            setScore(score + 1); // Increment cumulative score
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
            setFeedback("Incorrect. The correct answer is: " + currentQuestion.answer);
            incorrectSound.play(); // Play incorrect answer sound
            setConsecutiveCorrect(0); // Reset on incorrect answer
            setMessage(''); // Clear the motivational message
        }

        // Move to the next question or next stage
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < stages[currentStage].length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            // Stage is finished
            setStageFinished(true);
            setShowConfetti(true); // Show confetti after finishing the stage

            // Clear feedback and reset question index for the next stage
            setTimeout(() => {
                setFeedback('');
            }, 3000);
        }
    };

    const handleNextStage = () => {
        // Check if we are on the last stage
        if (currentStage < stages.length - 1) {
            setCurrentStage(currentStage + 1);
            setCurrentQuestionIndex(0);
            setStageFinished(false); // Reset stage finished state
            setShowConfetti(false); // Reset confetti state
        } else {
            // If it's the last stage, show the certificate
            setShowCertificate(true);
        }
    };

    const handleConfettiComplete = () => {
        setShowConfetti(false); // Hide confetti after it has finished
    };

    // New function to reset the quiz state
    const restartQuiz = () => {
        setCurrentStage(0);
        setCurrentQuestionIndex(0);
        setScore(0); // Reset cumulative score when restarting
        setFeedback('');
        setConsecutiveCorrect(0);
        setMessage('');
        setShowConfetti(false); // Reset confetti state
        setStageFinished(false); // Reset stage finished state
        setShowCertificate(false); // Reset certificate state
    };

    return (
        <div className="quiz-container">
            <header className="quiz-header">
                <h1>
                    Hangul Quiz | <img src={`${process.env.PUBLIC_URL}/wsu.ico`} alt="Woosong University" className="university-icon" />
                </h1>
                {/* Display current stage and question number */}
                <div className="quiz-counter">
                    {`🟩 Current Stage: ${currentStage + 1} | Question ${currentQuestionIndex + 1}/${stages[currentStage].length}`}
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
                {stageFinished ? (
                    <div className='res'>
                        {/* Pass the cumulative score and total number of questions left to the Results component */}
                        <Results score={score} total={totalQuestions} totalLeft={totalQuestionsLeft} />
                        <button onClick={handleNextStage} className="restart-button">
                            {currentStage < stages.length - 1 ? '➡️ Next Stage' : '✅ Finish Quiz and Get Certificate 📄'}
                        </button>
                        <button onClick={restartQuiz} className="restart-button">
                            🔄 Restart Quiz
                        </button>
                    </div>

                ) : (
                    <div className="quiz-content">
                        <h2 className="question">{stages[currentStage][currentQuestionIndex].question}</h2>
                        {stages[currentStage][currentQuestionIndex].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswer(option)} className="option-button">
                                {option}
                            </button>
                        ))}
                        {message && <div className="motivational-message">{message}</div>}
                        {feedback && <div className="feedback">{feedback}</div>}
                    </div>
                )}
            </main>
            <footer className="quiz-footer">
                <p>© 2024 <a href="https://jasurlive.uz" target="_blank" rel="noopener noreferrer">jasurlive.uz</a>. All rights reserved.</p>
            </footer>

            {showCertificate && (
                <Cert score={score} total={totalQuestions} onClose={() => setShowCertificate(false)} />
            )}
        </div>
    );
};

export default Quiz;
