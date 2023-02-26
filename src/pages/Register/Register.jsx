import React, { useContext, useState } from 'react';
import {FaUserAlt} from 'react-icons/fa'
import {MdAlternateEmail} from 'react-icons/md'
import {BsFillShieldLockFill} from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {

    // receive props from context api
    const {createUser,emailverify} = useContext(AuthContext)
    // declare state for set any error message
    const [error, setError] = useState(null)

    // redirect
    const navigate = useNavigate() 
    // get form data
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);


        // password validation
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please add at least one special character')
            return;
        }
        if (!/(?=.*[0-9])/.test(password)) {
            setError('Please provide at least one digit')
            return;
        }
        if (!/.{8}/.test(password)) {
            setError('Password should be at least 8 characters')
            return;
        }
        
        else {
            setError('');
        }

        // create a new user
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset()
            handleEmailVerification();
            // verification notification send by alert
            alert("Email Verifivation send please check your email and login")
            navigate('/login')
        })
        .catch(error => {
            console.error(error)
        })

    }


    // handle email verification
    const handleEmailVerification = () => {
        emailverify()
        .then(() => {})
        .catch(error => console.error(error))
    }

    return (
        <div className='relative'>
            <img 
            src="https://media.istockphoto.com/id/1210558590/photo/cheerful-afro-girl-sitting-on-floor-with-laptop-and-pointing-aside.jpg?b=1&s=170667a&w=0&k=20&c=RPIRjdT0WmmRd_rmE9yM9JRGqQHZECGgL3ON6HwfZVs=" 
            alt=""
            className='w-full h-full object-cover absolute inset-0' 
            />

           <div className='relative '>
            <div className='relative px-4 py-6 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='flex flex-col items-center justify-center'>
                   
                        <div className='w-full max-w-xl '>
                            <div className='bg-white shadow-2xl rounded p-7 text-slate-700'>
                                <h3 className='sm:text-center text-xl font-semibold mb-4 sm:mb-6 '>Please Register</h3>


                                <form onSubmit={handleRegister}>
                                    {/* name field */}
                                    <div className='mb-2 '>
                                        <label 
                                            htmlFor="name"
                                            className='block mb-1 text-[1rem] font-semibold'
                                            >Name
                                        </label>
                                       
                                        <div className='relative'>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                id="name"
                                                className='flex-grow w-full h-12 px-4  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none pl-11 text-purple-600 focus:border-purple-600 focus:outline-none focus:shadow-outline focus:bg-sky-50'
                                                placeholder='Enter your name'
                                                />
                                            <div className='absolute left-0 inset-y-0 inline-flex items-center pointer-events-none px-3'>
                                                <FaUserAlt className='text-purple-600'></FaUserAlt>
                                            </div>
                                        </div>
                                    </div>

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

                                    <p className='text-red-500  text-sm'>{error}</p>

                                    {/* button for submit */}

                                    <div className='mt-4'>
                                        <button 
                                        type="submit"
                                        className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-yellow-500 focus:shadow-outline focus:outline-none'
                                        >
                                        Register</button>
                                    </div>
                                    
                                </form>
                                <>
                                    <p className='text-sm mt-2'>Already have an account? Please <span>
                                    <Link to='/login' className='text-blue-700 focus:border-b focus:border-blue-800'>login</Link>
                                    </span> 
                                        
                                    </p>
                                </>
                            </div>

                        </div>
                </div>

            </div>

           </div>

            

        </div>
    );
};

export default Register;