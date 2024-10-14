import React from 'react';

const Results = ({ score, total, totalLeft }) => {
    // Calculate the percentage of correct answers
    const percentage = (score / total) * 100;

    // Funnier messages based on percentage ranges
    const messages = [
        { range: [90, 100], message: "You're a Hangul wizard! Did you summon these answers from the spirit world? 🧙‍♂️✨" },
        { range: [80, 89], message: "Impressive! You're so fluent, you might as well run for president of Korea! 🇰🇷🏛️" },
        { range: [70, 79], message: "Fantastic! You know so much Hangul, you could write the next best-selling K-drama script! 📖🎬" },
        { range: [60, 69], message: "Not bad! You’re like a Hangul detective—solving the mystery one quiz at a time! 🕵️‍♀️🔍" },
        { range: [50, 59], message: "Good effort! You're like a Hangul superhero—saving the day one letter at a time! 🦸‍♂️💥" },
        { range: [20, 49], message: "Hey, don’t worry! Every master was once a disaster! Keep going, Hangul ninja! 🥷🏻🌪️" },
        { range: [1, 19], message: "Well, at least you showed up! Just think of it as Hangul cardio—you’re getting your learning reps in! 💪📚" },
        { range: [0, 0], message: "Uh-oh! Looks like the Hangul quiz threw a curveball! Don’t worry, you’ve got this—let’s bounce back like a rubber duck! 🦆💦" },
    ];

    // Find the appropriate message based on percentage
    const resultMessage = messages.find(({ range }) => percentage >= range[0] && percentage <= range[1])?.message || "Keep trying, you'll get it next time!";


    return (
        <div className="results">
            <h2>Your Score: {score}/{total}</h2>
            <h3>Total Questions Left: {totalLeft}</h3> {/* Show the total number of questions left */}
            <div className='result-message'>
                <p>{resultMessage}</p>
            </div>
        </div>
    );
};

export default Results;
