import React from 'react';
import {FaUserAlt,FaFacebookSquare} from 'react-icons/fa'
import {MdAlternateEmail} from 'react-icons/md'
import {BsFillShieldLockFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {BsGoogle} from 'react-icons/bs'

const Login = () => {
    return (
        <div className='relative'>
            <img 
            src="https://media.istockphoto.com/id/1210558590/photo/cheerful-afro-girl-sitting-on-floor-with-laptop-and-pointing-aside.jpg?b=1&s=170667a&w=0&k=20&c=RPIRjdT0WmmRd_rmE9yM9JRGqQHZECGgL3ON6HwfZVs=" 
            alt=""
            className='w-full h-full object-cover absolute inset-0' 
            />

           <div className='relative bg-purple-500 opacity-80'>
            <div className='relative px-4 py-6 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
                <div className='flex flex-col items-center justify-center'>
                   
                        <div className='w-full max-w-xl '>
                            <div className='bg-white shadow-2xl rounded p-7 text-slate-700'>
                                <h3 className='sm:text-center text-xl font-semibold mb-4 sm:mb-6 '>Please Login</h3>


                                <form>

                                    {/*  email section */}

                                    <div className='mb-2 '>
                                        <label 
                                            htmlFor="email"
                                            className='block mb-1 text-[1rem] font-semibold'
                                            >Email
                                        </label>
                                       
                                        <div className='relative'>
                                            <input 
                                                type="text" 
                                                name="email" 
                                                id="email"
                                                className='flex-grow w-full h-12 px-4  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none pl-11 text-purple-600 focus:border-purple-600 focus:outline-none focus:shadow-outline focus:bg-sky-50'
                                                placeholder='Enter your email'
                                                />
                                            <div className='absolute left-0 inset-y-0 inline-flex items-center pointer-events-none px-3'>
                                                <MdAlternateEmail className='text-purple-600'></MdAlternateEmail>
                                            </div>
                                        </div>
                                    </div>

                                    {/* password section */}

                                    <div className='mb-2 '>
                                        <label 
                                            htmlFor="password"
                                            className='block mb-1 text-[1rem] font-semibold'
                                            >Password
                                        </label>
                                       
                                        <div className='relative'>
                                            <input 
                                                type="text" 
                                                name="password" 
                                                id="password"
                                                className='flex-grow w-full h-12 px-4  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none pl-11 text-purple-600 focus:border-purple-600 focus:outline-none focus:shadow-outline focus:bg-sky-50'
                                                placeholder='Enter your password'
                                                />
                                            <div className='absolute left-0 inset-y-0 inline-flex items-center pointer-events-none px-3'>
                                                <BsFillShieldLockFill className='text-purple-600'></BsFillShieldLockFill>
                                            </div>
                                        </div>
                                    </div>

                                    {/* button for submit */}

                                    <div className='mt-4'>
                                        <button 
                                        type="submit"
                                        className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-yellow-500 focus:shadow-outline focus:outline-none'
                                        >
                                        Login</button>
                                    </div>
                                    
                                </form>

                                <div className='mt-2'>
                                    <p className='text-sm'>Create a new account <span className=''> <Link className='text-blue-700 focus:border-b focus:border-blue-800' to='/register'>register</Link> </span></p>
                                </div>
                                <div className='flex items-center justify-between mb-2'>
                                    <span className='p-1 border-b-2 border-gray-300 w-full'></span>
                                    <span className='px-2'>or</span>
                                    <span className='p-1 border-b-2 border-gray-300 w-full'></span>

                                </div>

                                <div className='flex flex-col  justify-evenly'>
                                    <button className='text-white font-medium bg-red-500 rounded-sm py-1 text-[1rem] flex items-center flex-grow-0 justify-between px-4 mb-1 outline-none'>
                                        <BsGoogle></BsGoogle>
                                        <p className='mx-auto'>
                                            Sign in with Google
                                        </p>
                                    </button>
                                    <button className='text-white font-medium bg-blue-500 rounded-sm py-1 text-[1rem] flex items-center flex-grow-0 justify-between px-4 mb-1 outline-none'>
                                        <FaFacebookSquare></FaFacebookSquare>
                                        <p className='mx-auto'>
                                            Sign in with Facebook
                                        </p>
                                    </button>
                                </div>
                            </div>

                        </div>
                </div>

            </div>

           </div>

            

        </div>
    );
};

export default Login;