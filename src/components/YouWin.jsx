import React from 'react';
import './../App.css'

const YouWin = (props) => {
    return (
        <div className='youWin rounded-[20px] flex justify-center items-center flex-col'>
            <div className='text-white text-[40px]'>{props.result} </div>
            <button onClick={props.Restart} className='text-white text-[20px] rounded-[10px] border-2 border-white pt-2 pb-2 pl-5 pr-5 mt-4'>Play Again</button>
        </div>
    );
}

export default YouWin;
