import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavList = ({nav}) => {
    // console.log(nav);
    const {Name, path} =nav
    return (
        <div>
            <div className='py-6 xl:text-xl mr-4 font-bold text-slate-500 hidden md:block'>
                <NavLink className={({isActive}) => isActive ? 'text-purple-700 duration-300 ease-out' : undefined} to={path}>{Name}</NavLink> 
                            
            </div>
        </div>
    );
};

export default NavList;