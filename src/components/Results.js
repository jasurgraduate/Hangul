import React from 'react';

const Results = ({ score, total }) => {
    return (
        <div className="results">
            <h2>Your Score: {score}/{total}</h2>
        </div>
    );
};

export default Results;
