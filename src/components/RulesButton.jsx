import React, {useRef} from 'react';
import './../App.css'

const RulesButton = (props) => {

    let modalRef = useRef(null)

    let modalDisplay = ()=> {
        modalRef.current.classList.toggle("appear")
    }

    return (
        <div className=''>
            <div ref={modalRef} className='modal justify-center items-center absolute w-full h-full aspect-square bg-[#000000c7] top-0 bottom-0 right-0 left-0 m-[auto] hidden'>
                <div className='bg-gray-300 w-[500px] h-[500px] rounded-[20px] flex justify-center items-center pt-6 relative'>
                    <img className='w-[70%]' src={props.Modal} alt="" />
                    <button onClick={()=> modalDisplay()} className='absolute top-[20px] right-[20px]'>close</button>
                </div>
            </div>
            <button onClick={()=> modalDisplay()} className='border-2 border-white text-white tracking-wider pl-10 pr-10 pt-2 pb-2 rounded-[10px] absolute bottom-[20px] right-[20px]'>RULES</button>
        </div>
    );
}

export default RulesButton;
