import React from 'react'
import styled from 'styled-components'
// function TotalScore() {
//   return (
//     <div>TotalScore</div>
//   )
// }

const TotalScore = ({score}) =>{
    return(
        <>
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
        </>
    )
}
export default TotalScore

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
    /* margin: 0; */
    h1{
        font-size: 100px;
        line-height: 100px;
        margin: 0;
    }

    p{
        font-size: 24px;
        font-weight: 500px;
    }
`