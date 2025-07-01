import { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    "What's my favorite food?",
    "What's my favorite color?",
    "When is my brithday?",
    "Whos my favorite artist?"
  ];

  const choicesArray = [
    ["Cachapas", "Empanadas", "Arepas", "Sushi"],
    ["Red", "Purple", "Blue", "Green"],
    ['02/01', "16/03", "25/9", "30/7"],
    ["Tyler the creator", "Jose Jose", "Luis Miguel", "Kendrick Lamar"]
  ];

  const correctAnswers = ["Cachapas", "Green", "16/03", "Tyler the creator"];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleAnswer = (choice) => {
    if (choice === correctAnswers[currentQuestionIndex]) {
      setScore(prev => prev + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setGameOver(true);
      setFeedback(`Your score is ${score + (choice === correctAnswers[currentQuestionIndex] ? 1 : 0)}`);
    }
  };

  return (
    <div className="container">
      <h1>Trivia Game!</h1>
      <h2>How well do you know me?</h2>

      {!gameOver ? (
        <>
          <h2>{questions[currentQuestionIndex]}</h2>
          <div id="choices">
            {choicesArray[currentQuestionIndex].map((choice, index) => (
              <button key={index} onClick={() => handleAnswer(choice)}>
                {choice}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div id="result">
          <h2>{feedback}</h2>
        </div>
      )}
    </div>
  );
}

export default App;

