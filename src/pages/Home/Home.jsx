import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';

const Home = () => {
    const navbar = useLoaderData()
    
    
    return (
        <div>
            <h1 className='text-center text-3xl my-10'>This is Home Page</h1>
            <div className='grid grid-cols-4 gap-1'>
                
            </div>
        </div>
    );
};

export default Home;