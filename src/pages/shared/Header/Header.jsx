import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

import NavList from "./NavList";
const Header = () => {
  //data load from header.json
  const [navMenu, setNevMenu] = useState([]);
  useEffect(() => {
    fetch("NavMenu.json")
      .then((res) => res.json())
      .then((data) => setNevMenu(data));
  }, [navMenu]);

  // props receive from context
  const { LogOut, user ,setUser} = useContext(AuthContext);

//   set naigate
const navigate = useNavigate()
  const handleLogOut = () => {
    LogOut()
      .then(() => {
        setUser({})
        navigate('/login')
      })
      .catch(() => {
        setUser({})
      });
  };

  return (
    <div>
      <div className="flex gap-4 justify-between shadow-md static z-10">
        <div className="text-2xl font-bold mx-10 py-6 text-slate-600">
          Ema Jhon
        </div>
        <div className="flex justify-end items-center gap-4">
          {navMenu.map((nav) => (
            <NavList key={nav.id} nav={nav}></NavList>
          ))}
        </div>
        
        {
            user?.uid ?
                <>
                    <button className=" font-semibold bg-red-500 px-4 my-3 mr-4 rounded text-white" onClick={handleLogOut}>Logout</button>
                    {/* <p>{user?.email}</p> */}
                </>
        :
        <>
            <button className=" font-semibold bg-blue-500 px-4 my-3 mr-4 rounded text-white" onClick={handleLogOut}>Login</button>
            
        </>
        }
      </div>
    </div>
  );
};

export default Header;
