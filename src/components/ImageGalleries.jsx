import React from 'react';
import ImageGallery from './ImageGallery';
import Gallery1 from '../images/gallery1.jpg';
import Gallery2 from '../images/gallery2.jpg';
import Gallery3 from '../images/gallery3.jpg';
import Gallery4 from '../images/gallery4.jpg';
import Gallery5 from '../images/gallery5.jpg';

const ImageGalleries = () => {
  return (
    <section id='gallery' className='max-w-[1140px] m-auto w-full p-4 py-16'>

        <h2 className='text-center text-gray-700'>Image Galleries</h2>

        <div className='grid sm:grid-cols-5 gap-4 mt-2'>
            <div className='sm:col-span-3 col-span-2 sm:row-span-2'>
                <ImageGallery src={Gallery1} alt='Gallery1'/>
            </div>
            <ImageGallery src={Gallery2} alt='Gallery2'/>
            <ImageGallery src={Gallery3} alt='Gallery3'/>
            <ImageGallery src={Gallery4} alt='Gallery4'/>
            <ImageGallery src={Gallery5} alt='Gallery5'/>
        </div>

    </section>
  );
};

export default ImageGalleries;
