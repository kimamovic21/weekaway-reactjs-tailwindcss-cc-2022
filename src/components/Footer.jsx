import React from 'react';
import {BsChatSquareDots} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='p-4 max-w-[1140px] w-full pt-6 m-auto border-t-4'>
        <div className='flex flex-col sm:flex-row items-center m-auto justify-center'>
            <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>
            <h2 className='text-xl font-bold text-gray-700 uppercase mr-2'>Weekaway</h2>
            <p className='text-sm'>2022 &copy; All rights reserved</p>
        </div>
    </footer>
  );
};

export default Footer;
