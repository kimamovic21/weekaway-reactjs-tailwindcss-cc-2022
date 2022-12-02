import React from 'react';
import FormImage from '../images/form.jpg';

const Contact = () => {
  return (
    <section id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>

        <h2 className='text-center text-gray-700'>Send us a message</h2>
        <p className='text-center text-gray-600 py-2'>We're standing by!</p>
        <div className='grid md:grid-cols-2'>
            <img src={FormImage} alt="form" className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'/>
            <form>
                <div className='grid grid-cols-2'>
                    <input className='border m-2 p-2 rounded-lg focus:outline-none' type="text" placeholder='First Name'/>
                    <input className='border m-2 p-2 rounded-lg focus:outline-none' type="text" placeholder='Last Name'/>
                    <input className='border m-2 p-2 rounded-lg focus:outline-none' type="email" placeholder='Email' />
                    <input className='border m-2 p-2 rounded-lg focus:outline-none' type="tel" placeholder='Phone'/>
                    <input className='border col-span-2 p-2 m-2 rounded-lg focus:outline-none' type="text" placeholder='Address'/>
                    <textarea className='border col-span-2 m-2 p-2 rounded-lg focus:outline-none resize-none' cols="20" rows="10" placeholder='Your message'></textarea>
                    <button className='col-span-2 m-2'>Submit</button>
                </div>
            </form>
        </div>

    </section>
  );
};

export default Contact;
