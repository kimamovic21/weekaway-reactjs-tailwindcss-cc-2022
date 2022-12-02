import React from 'react';

const ImageGallery = ({src, alt}) => {
  return (
    <div>
        <div className='w-full h-full'>
            <img src={src} 
                 alt={alt} 
                 className='w-full h-full object-cover'
            />
        </div>
    </div>
  );
};

export default ImageGallery;
