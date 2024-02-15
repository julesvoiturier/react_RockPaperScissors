import React from 'react';
import './../App.css'

const Rock = (props) => {
    return (
        <button onClick={()=>props.choiceFunction("rock")} className='rockButton aspect-square bg-white border-[25px] border-red-400 rounded-full flex justify-center items-center'>
            <img src={props.RockIcon} alt="" className='w-[50%]'/>
        </button>
    );
}

export default Rock;
