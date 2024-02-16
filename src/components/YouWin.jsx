import React from 'react';
import './../App.css'

const YouWin = (props) => {
    return (
        <div className='youWin rounded-[20px] flex justify-center items-center flex-col'>
            <div className='text-white text-[30px] tracking-wider'>{props.result} </div>
            <button onClick={props.Restart} className='text-[#1f3756] bg-white text-[15px] tracking-wider rounded-[10px] border-2 border-white pt-3 pb-3 pl-10 pr-10 mt-4 transition-all hover:text-red-500'>PLAY AGAIN</button>
        </div>
    );
}

export default YouWin;
