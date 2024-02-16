import React from 'react';

const TopBar = (props) => {
    return (
        <div className='w-1/2 h-[180px] border-[3px] border-[hsl(217,16%,45%)] rounded-[20px] flex justify-between items-center p-5 mt-[30px]'>
            <div className='h-full pt-1'><img className='h-full' src={props.Title} alt="" /></div>
            <div className='flex flex-col justify-between items-center w-[20%] h-full bg-white rounded-[10px] p-5 text-[#1f3756] tracking-wider'>SCORE<br/><span className='text-[50px] leading-[50px] font-bold'>{props.points}</span></div>
        </div>
    );
}

export default TopBar;
