import { useState } from "react";
import StartGame from "./Components/StartGame";
import styled from "styled-components";
import Gameplay from "./Components/GamePlay";

function App() {

  const [isGameStarted,setIsGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setIsGameStarted((prev)=> !prev);

  }

  return (
    <>

    {isGameStarted ? <Gameplay/> : <StartGame toggle={toggleGamePlay}/>}
    </>
  )
}

export default App
