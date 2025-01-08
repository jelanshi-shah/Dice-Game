import styled from 'styled-components'

const StartGame = ({toggle}) =>{
    return (
        <Container>
            <div>
            <img src="/images/dicewhole.jpg" alt="" />
            </div>
            <div className='content'>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>  
            </div>
        </Container>
);
};

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    margin: 0 auto;
    align-items:center; 
    justify-content   : center;


    .content {
        h1{
            font-size: 100px;
            white-space: nowrap;
        }
    }
`



const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background-color: black;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        cursor: pointer;
    }
`;


