import React, { useEffect, useState } from 'react';

import NavList from './NavList';
const Header = () => {
    //data load from header.json
    const [navMenu , setNevMenu] = useState([]);
    useEffect( () => {
        fetch('NavMenu.json')
        .then(res => res.json())
        .then(data => setNevMenu(data))
    },[navMenu])
    return (
        <div>
            <div className='flex gap-4 justify-between shadow-md static z-10'>
                <div className='text-2xl font-bold mx-10 py-6 text-slate-600'>Ema Jhon</div>
                <div className='flex justify-between gap-4'> 
                {
                    navMenu.map(nav => <NavList key={nav.id} nav={nav}></NavList>)
                }                          
                </div>
            </div>
        </div>
    );
};

export default Header;