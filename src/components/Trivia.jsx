import { useEffect, useState } from "react";

export default function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);



  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName('answer active');

    if (a.correct) {
      setClassName('answer correct');
      setQuestionNumber((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setClassName('answer wrong');
      setTimeOut(true);
    }
  };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}