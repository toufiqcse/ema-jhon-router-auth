import React from 'react';

const Register = () => {
    return (
        <div className='relative'>
            <img 
            src="https://media.istockphoto.com/id/1210558590/photo/cheerful-afro-girl-sitting-on-floor-with-laptop-and-pointing-aside.jpg?b=1&s=170667a&w=0&k=20&c=RPIRjdT0WmmRd_rmE9yM9JRGqQHZECGgL3ON6HwfZVs=" 
            alt=""
            className='w-full h-full object-fill absolute inset-0' 
            />

           <div className='relative bg-purple-600 opacity-70'>
            <div className='px-4 py-6 mx-auto md:max-w-full lg:max-w-screen-xl'>
                <div className='flex flex-col items-center justify-center'>
                        <div className='w-full max-w-xl '>
                            <div className='bg-white shadow-2xl rounded p-7'>
                                <h3 className='sm:text-center text-xl font-semibold mb-4 sm:mb-6 '>Please Register</h3>
                            </div>

                        </div>
                </div>

            </div>

           </div>

            

        </div>
    );
};

export default Register;