import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play Dice Game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>click on dice image if selected number equal to dicenumber you will get +2 points . </p>
            <p>if you get wrong guess then 2 point will be deducted</p>
            <p>copy right - ©Jelanshi shah</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div  `
    max-width: 800px;
    margin: 0 auto;
    background-color: #fbf1f1;
    padding: 20px;
    margin-top: 40px;
    h2{
        font-size: 24px;
    }

    .text{
        margin-top: 24px;
    }

`