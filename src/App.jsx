import "./App.css";
import {useState } from "react";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import data from "./components/Data";

function App() {
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);

  const resetGame = () => {
    setTimeOut(false);
    setQuestionNumber(1);
  };


  return (
    <div className="app">
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You lost!<br></br><br></br> <br></br>Level reached: {questionNumber - 1}<br></br><br></br> <br></br>
              <button onClick={resetGame}>Reset Game</button></h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                  <div className="level">Question {questionNumber}</div>
                </div>
                <div className="bottom">
                
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                    
                  />
                </div>
              </>
            )}
          </div>
         
        </>
      )
    </div>
  );
}

export default App;