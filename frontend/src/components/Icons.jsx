import React from 'react';
import { icons } from '../assets/Assets';

const Icons = ({ iconsetter, seticonsetter }) => {
  return (
    <div className='border-b border-gray-200 flex items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 sticky top-[50px] z-[20] bg-white py-2'>
      {icons.map((props, index) => (
        <div
          key={index}
          onClick={() => seticonsetter(props.name)}
          className={`flex-shrink-0 flex items-center mx-2 py-2 px-4 cursor-pointer scale-105 ${
            props.name === iconsetter 
            ? "border-b-2 border-black translate-y-[-4px] duration-300 "
            : ""
          }`}
        >
          <img src={props.image} alt={props.name} className='h-12 w-auto' />
        </div>
      ))}
    </div>
  );
}

export default Icons;
