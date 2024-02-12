import React from 'react'
import ButtonMain from './ButtonMain';
import Question from './Question';

export default function Home() {
  const ques=parseInt(localStorage.getItem("ques"));
  const val=parseInt(localStorage.getItem("score"));
  return (
    <>
    { ques!== 0?(
      <Question  ques={ques} val={val}/>
    ) :
    (
      <>
    <div>
        <div className='head'><h1>WELCOME !</h1></div>
        <ButtonMain text="Start Quiz" link="quiz"></ButtonMain>
    </div>
    </>
    )
    }
    </>
  )
}
