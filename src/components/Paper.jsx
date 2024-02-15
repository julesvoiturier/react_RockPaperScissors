import React from 'react';
import './../App.css'

const Paper = (props) => {
    return (
        <button onClick={()=>props.choiceFunction("paper")} 
        className={`paperButton aspect-square rounded-full flex justify-center items-center 
        ${props.displayMiddle == true && props.choice == "paper" ? `youWinLeft` : ``} 
        ${props.displayMiddle == true && props.choice != "paper" ? `youWinRight` : ``} 
        ${props.choice != "paper" && props.houseDisplay == true ? `houseDisplay`:``} 
        ${props.choice == "paper" ? `yourDisplay` : ``}`}>

            <div className='w-[75%] h-[75%] bg-white rounded-full flex justify-center items-center'>
                <img src={props.PaperIcon} alt="" className='w-[50%]'/>
            </div>
        </button>
    );
}

export default Paper;
