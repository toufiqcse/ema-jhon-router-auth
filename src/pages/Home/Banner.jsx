import React from 'react';

const Banner = ({image}) => {

    return (
        <div className=' '>
            <div className=''>
            <img className='' src={image.img} alt="" />
            </div>
        </div>
    );
};

export default Banner;