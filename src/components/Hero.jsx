import React from 'react';
import Beach from '../images/beach.jpg';

const Hero = () => {
  return (
    <section id='home' className='w-full h-[90vh]'>

        <img src={Beach} alt="Beach" className='w-full h-full object-cover' />

        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[700px] flex flex-col text-[#f5f5f5] p-4 bg-black/40 rounded-xl'>
                <h2 className='font-bold text-4xl'>Find Your Special Trip</h2>
                <h3 className='text-4xl py-4 italic'>With Weekaway</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius natus quo odio voluptate provident suscipit aspernatur enim sapiente ipsam.</p>
            </div>
        </div>

    </section>
  );
};

export default Hero;
