import React from 'react';

const Results = ({ score, total }) => {
    // Funnier messages based on score ranges
    const messages = [
        { range: [47, 47], message: "You're a Hangul wizard! Did you summon these answers from the spirit world? 🧙‍♂️✨" },
        { range: [45, 46], message: "Impressive! You're so fluent, you might as well run for president of Korea! 🇰🇷🏛️" },
        { range: [42, 44], message: "Fantastic! You know so much Hangul, you could write the next best-selling K-drama script! 📖🎬" },
        { range: [35, 41], message: "Not bad! You’re like a Hangul detective—solving the mystery one quiz at a time! 🕵️‍♀️🔍" },
        { range: [25, 34], message: "Good effort! You're like a Hangul superhero—saving the day one letter at a time! 🦸‍♂️💥" },
        { range: [10, 24], message: "Hey, don’t worry! Every master was once a disaster! Keep going, Hangul ninja! 🥷🏻🌪️" },
        { range: [1, 9], message: "Well, at least you showed up! Just think of it as Hangul cardio—you’re getting your learning reps in! 💪📚" },
        { range: [0, 0], message: "Uh-oh! Looks like the Hangul quiz threw a curveball! Don’t worry, you’ve got this—let’s bounce back like a rubber duck! 🦆💦" },
    ];

    // Find the appropriate message based on the score
    const resultMessage = messages.find(({ range }) => score >= range[0] && score <= range[1])?.message || "Keep trying, you'll get it next time!";

    return (
        <div className="results">
            <h2>Your Score: {score}/{total}</h2>
            <div class='result-message'><p>{resultMessage}</p></div>
        </div>
    );
};

export default Results;
