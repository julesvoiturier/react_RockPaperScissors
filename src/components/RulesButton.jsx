import React from 'react';

const RulesButton = () => {

    let display = false
    let modalDisplay = ()=> {
        display = true
    }

    return (
        <div className=''>
            <div className='modal absolute w-[32%] aspect-square bg-gray-400 top-0 bottom-0 right-0 left-0 m-[auto] hidden'></div>
            <button onClick={()=> modalDisplay()} className='border-2 border-white text-white tracking-wider pl-10 pr-10 pt-2 pb-2 rounded-[10px] absolute bottom-[20px] right-[20px]'>RULES</button>
        </div>
    );
}

export default RulesButton;
