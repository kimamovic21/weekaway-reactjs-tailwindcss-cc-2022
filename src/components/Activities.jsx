import React from 'react';
import Activity from './Activity';
import Resorts from '../images/resorts.jpg';
import Cruises from '../images/cruises.jpg';
import Excursions from '../images/excursions.jpg';

const Activities = () => {
  return (
    <section className='max-w-[1140px] m-auto w-full md:flex mt-[6rem] sm:mt-[-4rem]'>

       <Activity title='Resorts' image={Resorts} alt='Resorts' />
       <Activity title='Cruises' image={Cruises} alt='Resorts' />
       <Activity title='Excursions' image={Excursions} alt='Resorts' />

    </section>
  );
};

export default Activities;
