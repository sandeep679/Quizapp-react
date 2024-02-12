import React, { useState,useEffect } from 'react'
import QuizData from './Data';
import QuizResult from './QuestionResult';;
function Quiz({ques,val}) {
    

    const [currentQuestion,setCurrentQuestion]=useState(ques);
    const [score,setScore] = useState(val);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    useEffect(() => {
        localStorage.setItem("ques",currentQuestion);
        localStorage.setItem("score",score);
      }, [currentQuestion,score]);
    useEffect(() => {
        localStorage.setItem("ques",0);
        localStorage.setItem("score",0);
        localStorage.clear();
      }, [showResult]);

  return (
    <div>
        <p className="heading-txt">Quiz APP</p>
        <div className="container">
            {showResult ? (
                <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        
                        className={`option-btn ${
                            clickedOption === i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
  )
}
Quiz.defaultProps = {
    ques: 0 ,
    val: 0,
  }

export default Quiz