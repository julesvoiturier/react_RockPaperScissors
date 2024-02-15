import React from 'react';

const Scissors = (props) => {
    return (
        <button onClick={()=>props.choiceFunction("scissors")} className='scissorsButton aspect-square bg-white border-[25px] border-yellow-300 rounded-full flex justify-center items-center'>
            <img src={props.ScissorsIcon} alt="" className='w-[50%]'/>
        </button>
    );
}

export default Scissors;
