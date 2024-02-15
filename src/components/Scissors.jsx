import React from 'react';
import './../App.css'

const Scissors = (props) => {
    return (
        <button onClick={()=>props.choiceFunction("scissors")} 
        className={`scissorsButton aspect-square rounded-full flex justify-center items-center 
        ${props.choice != "scissors" && props.houseDisplay == true ? `youWinRight`:``} 
        ${props.choice == "scissors" ? `youWinLeft` : ``}`}>
            
            <div className='flex justify-center items-center bg-white w-[75%] h-[75%] rounded-full'>
                <img src={props.ScissorsIcon} alt="" className='w-[50%]'/>
            </div>
        </button>
    );
}

export default Scissors;
