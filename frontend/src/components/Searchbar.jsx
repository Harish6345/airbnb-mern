import React, { useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
  const clickbar = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  const eventhandler = () => {
    if (clickbar.current) {
      // Toggle the state
      setIsClicked(prevState => !prevState);

      const pElement = clickbar.current.querySelector('p');
      
      // If clicked (true), add the class; if not, hide it
      if (isClicked) {
        if (pElement) {
          pElement.className = 'hidden'; // Hide when clicked again
        }
      } else {
        if (pElement) {
          pElement.className = 'text-white'; // Show when clicked
        }
      }
    }
  };

  return (
    <div className='w-full mt-20'>
      <div onClick={eventhandler} className="hidden search-bar py-4 border border-[#d0d0d0] w-[90%] lg:w-[55%] 2xl:w-[45%] mx-auto rounded-full sm:flex items-center justify-between px-6 text-sm">
        <div className="text-cont1 flex flex-col justify-between cursor-pointer">
          <strong>Where</strong><p>Search Destinations</p>
        </div>
        <div className='h-9 w-[2px] bg-[#d0d0d0]' />
        <div onClick={eventhandler} className="text-cont2 flex flex-col justify-between cursor-pointer">
          <strong>Check in</strong><p>Add Dates</p>
        </div>
        <div className='h-9 w-[2px] bg-[#d0d0d0]' />
        <div onClick={eventhandler} className="text-cont3 flex flex-col justify-between cursor-pointer">
          <strong>Check out</strong><p>Add Dates</p>
        </div>
        <div className='h-9 w-[2px] bg-[#d0d0d0]' />
        <div onClick={eventhandler} className="text-cont4 flex flex-col justify-between cursor-pointer">
          <strong>Who</strong><p>Add Guests</p>
        </div>
        <div ref={clickbar} className="serch-bar p-4 bg-primary rounded-full flex gap-2 items-center">
          <FaSearch className='text-white' />
          <p className='text-white hidden'>Search</p>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
