import React from 'react'
import ButtonMain from './ButtonMain';

function Quiz() {
  return (
    <div>
    <div className='text1'><h1>There are 10 mutliple choice question and you have answer them all !</h1></div>
    <ButtonMain text="Proceed" link="/quiz/:id"></ButtonMain>
    </div>
  )
}

export default Quiz;