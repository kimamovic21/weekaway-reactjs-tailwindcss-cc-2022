import React from 'react';
import Beach from '../images/beach.jpg';

const Hero = () => {
  return (
    <section id='home' className='w-full h-[90vh]'>

        <img src={Beach} alt="Beach" className='w-full h-full object-cover' />

        <div className='max-w-[1140px] m-auto'> 
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[800px] flex flex-col text-[#f5f5f5] p-4 bg-black/40 rounded-xl text-justify'>
                <h2 className='font-bold text-4xl'>Find Your Special Trip</h2>
                <h3 className='text-4xl py-4 italic'>With Weekaway</h3>
                <p>Experience the ultimate in luxury and relaxation with our 5-star villa getaway. Nestled in the heart of the island, our private villa features breathtaking views, a private pool, and all the amenities you need for a luxurious escape. Indulge in gourmet meals prepared by our private chef, relax with massages and spa treatments, and explore the beauty of our island with guided tours and activities.</p>
            </div>
        </div>

    </section>
  );
};

export default Hero;
