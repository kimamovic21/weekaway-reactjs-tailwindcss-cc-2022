import React from 'react';
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai';
import {BsChatSquareDots} from 'react-icons/bs';

const TopBar = () => {
  return (
    <div id='topbar' className='flex flex-col sm:flex-row justify-between items-center px-4 py-2 mt-14 scroll-m-20'>

        <div className='flex items-center'>
            <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2' />
            <h1 className='uppercase text-2xl font-bold text-gray-700'>Weekaway</h1>
        </div>

        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle size={20} className='m-2 text-[var(--primary-dark)]'/>
                <p className='uppercase text-sm text-gray-500 '>9am - 5pm</p>
            </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone size={20} className='m-2 text-[var(--primary-dark)]' />
                <p className='text-sm text-gray-500'>387-61-234-567</p>
            </div>
            <button className='mt-2 sm:m-0 w-[300px] sm:w-[200px]'>
                Get a free quote
            </button>
        </div>

    </div>
  );
};

export default TopBar;
