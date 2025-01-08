
import TotalScore from './TotalScore'
import { SelectorNumber } from './SelectorNumber'
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { useEffect, useState } from 'react';
import Rules from './Rules';

function GamePlay() {
    const [selectedNumber,setSelectedNumber] = useState();
    const [currentDice,setCurrentDice] = useState(1);
    const [score,setScore] = useState(0)
    const [error,SetError] = useState("")
    const [showRules,setShowRules] = useState(false)

    useEffect(() => {
        if(selectedNumber) SetError("")
    },[selectedNumber])

    const generateRandomNumber = (min,max) =>{
        return Math.floor(Math.random() * (max - min) + min);
    };

    const resetScore =()=>{
        setScore(0)
    }

    const roleDice = () =>{
        if(!selectedNumber) {
            SetError("You have not selected any number");
            return;
        }
            
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice(randomNumber)

        if(selectedNumber === randomNumber){
            setScore((prev) => prev + 2);
        }
        else{
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined)
    }
  return (
    <MainContainer>
    <main>
        <div className='top_section'>
        <TotalScore score={score}/>
        <SelectorNumber error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>
        {/* <RoleDice currentDice={currentDice} setCurrentDice={setCurrentDice}/> */}
        <RoleDice currentDice={currentDice} roleDice={roleDice} />
        <div>
            <button className='btn' onClick={resetScore}>Reset</button>
            <button className='btns' onClick={()=> setShowRules(prev => !prev)}> {showRules ? "Hide" : "Show"} Rule</button>
        </div>

        {showRules && <Rules/>}

    </main>
    </MainContainer>
)
}

export default GamePlay;

const MainContainer = styled.main`
    padding-top: 70px;

    .topselection {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btn {
    color: white;
    padding: 10px 18px;
    background-color: black;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 650px;
    margin-top: 10px;
    cursor: pointer;
    }

    /* .btn:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        cursor: pointer;
    } */

    .btns {
    color: black;
    padding: 10px 18px;
    background-color: white;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 650px;
    margin-top: 10px;
    border: 1px solid black;
    cursor: pointer;
    }

    /* .btns:hover{
        background-color: black;
        color: white;
        cursor: pointer;
    } */
`

