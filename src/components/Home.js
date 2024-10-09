import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Hangul Learning!</h1>
            <p>Learn the Korean alphabet interactively.</p>
            <Link to="/quiz">
                <button className="start-button">Start Learning</button>
            </Link>
        </div>
    );
};

export default Home;
