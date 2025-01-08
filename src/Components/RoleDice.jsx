// import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({roleDice,currentDice}) => {

    

    return (
    <DiceContainer>
        <div onClick={roleDice}>
            <img className='dice' src={`/public/images/dice${currentDice}.svg`} alt="" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .dice{
        cursor: pointer;
        height: 250px;
        width: 250px;
    }

    p{
        font-size: 24px;
    }

` 