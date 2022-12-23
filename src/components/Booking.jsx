import React from 'react';

const Booking = () => {
  return (
   <section id='deals' className='max-w-[1140px] m-auto w-full p-4 scroll-m-5'>

        <form className='lg:flex lg:justify-between w-full items-center mt-7'>
            <div className='flex flex-col my-2 py-2'>
                <label>Destitantion</label>
                <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
                    <option>Grande Antigue</option>
                    <option>Key West</option>
                    <option>Maldives</option>
                    <option>Cozumel</option>
                </select>
            </div>
            <div className='flex flex-col sm:flex-row w-full'>
                <div className='flex flex-col w-full lg:max-w-[200px] my-2 p-2'>
                    <label>Check-In</label>
                    <input type="date" className='border rounded-md p-2'/>
                </div>
                <div className='flex flex-col w-full lg:max-w-[200px] my-2 p-2'>
                    <label>Check-Out</label>
                    <input type="date" className='border rounded-md p-2'/>
                </div>
            </div>
            <div className='flex flex-col my-2 py-2 w-full'>
                <label>Search</label>
                <button className='w-full'>Rates & Availabilities</button>
            </div>
        </form>

   </section>
  );
};

export default Booking;
