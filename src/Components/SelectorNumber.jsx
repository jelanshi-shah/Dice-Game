import styled from 'styled-components'


export const SelectorNumber = ({error, selectedNumber,setSelectedNumber}) => {
    
    const arrNumber = [1,2,3,4,5,6];
    return (
    <>
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className='flex'>
            {arrNumber.map((value,i)=>(
                <Box isSelected={value === selectedNumber} key={i} onClick={()=> setSelectedNumber(value)} >{value}</Box>
            ))}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
    </>
)
}

const NumberSelectorContainer = styled.div`

    position: absolute;
    top: 50px;
    right: 16px;
    align-items: end;


    .flex{
        display: flex;
        gap: 24px;
}

p{
        text-align: right;
    }

.error{
        color: red;
    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`