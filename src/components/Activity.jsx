import React from 'react';

const Activity = ({title, image, alt}) => {
  return (
    <div>

        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#f5f5f5] text-3xl font-bold bg-black/50 p-1 rounded-lg md:text-2xl'>
                {title}
            </h3>
            <img src={image} 
                 alt={alt} 
                 className='w-full h-full object-cover relative border-4 border-white shadow-xl'
            />
        </div>

    </div>
  );
};

export default Activity;
