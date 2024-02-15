import React from 'react';

const TopBar = () => {
    return (
        <div className='w-1/2 h-[180px] bg-red-400 rounded-[20px] flex justify-between items-center p-5'>
            <div className='text-[40px] leading-[40px]'>ROCK<br/>PAPER<br/>SCISSORS</div>
            <div className='flex flex-col justify-between items-center w-[25%] h-full bg-white rounded-[10px] p-5'>SCORE<br/><span className='text-[50px] leading-[50px]'>12</span></div>
        </div>
    );
}

export default TopBar;
