import React from 'react';
import Quiz from './components/Quiz'; // Import your Quiz component
import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* Render the Quiz component directly */}
      <Quiz />
    </div>
  );
};

export default App;
