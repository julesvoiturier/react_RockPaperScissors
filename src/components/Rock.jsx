import React from 'react';
import './../App.css'

const Rock = (props) => {


    return (
        <button onClick={()=> props.choiceFunction("rock")} 
        className={`rockButton aspect-square rounded-full flex justify-center items-center 

        ${props.choice != "rock" && props.houseDisplay == true ? `youWinRight`:``} 
        ${props.choice == "rock" ? `youWinLeft` : ``}  `}>

            <div className='w-[75%] h-[75%] flex justify-center items-center bg-white rounded-full'>
                <img src={props.RockIcon} alt="" className='w-[50%]'/>
            </div>
        </button>
    );
}

export default Rock;
