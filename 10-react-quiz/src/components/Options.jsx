function Options({ question, answer, dispatch }) {
  const handleAnswer = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={handleAnswer}
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${handleAnswer ? (index === question.correctOption ? "correct" : "wrong") : ""}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
