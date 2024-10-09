import React from 'react';

const hangulCards = [
    { character: "가", pronunciation: "ga" },
    { character: "나", pronunciation: "na" },
    { character: "다", pronunciation: "da" },
    // Add more characters here...
];

const HangulCards = () => {
    return (
        <div className="card-container">
            {hangulCards.map((card, index) => (
                <div className="card" key={index}>
                    <h3>{card.character}</h3>
                    <p>Pronunciation: {card.pronunciation}</p>
                </div>
            ))}
        </div>
    );
};

export default HangulCards;
