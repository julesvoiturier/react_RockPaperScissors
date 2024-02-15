import React from 'react';
import './../App.css'

const Paper = (props) => {
    return (
        <button onClick={()=>props.choiceFunction("paper")} className='paperButton aspect-square bg-white border-[25px] border-blue-400 rounded-full flex justify-center items-center'>
            <img src={props.PaperIcon} alt="" className='w-[50%]'/>
        </button>
    );
}

export default Paper;
