import React from 'react';
import './../App.css'

const Paper = (props) => {
    return (
        <button onClick={()=>props.choiceFunction("paper")} 
        className={`paperButton aspect-square rounded-full flex justify-center items-center 

        ${props.choice != "paper" && props.houseDisplay == true ? `youWinRight`:``} 
        ${props.choice == "paper" ? `youWinLeft` : ``}`}>

            <div className='w-[75%] h-[75%] bg-white rounded-full flex justify-center items-center'>
                <img src={props.PaperIcon} alt="" className='w-[50%]'/>
            </div>
        </button>
    );
}

export default Paper;
