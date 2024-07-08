import React from 'react';
const Register = () => {
    return (  <div>

        <div class="grid gap-6 mb-6 md:grid-cols-2 h-full  ">
        <form className='ml-14'>
        <h1 className='text-white mt-20 pl-20 text-3xl'>Register Now</h1>

        <div className='text-center ml-20 mt-4'>
            <label for="first_name" class="block mb-2 text-sm font-medium text-white">Name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required />
            <br></br>
            <label for="first_name" class="block mb-2 text-sm font-medium text-white">Email</label>
            <input type="email" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your email" required />
            <br></br>
            <label for="first_name" class="block mb-2 text-sm font-medium text-white">Passowrd</label>
            <input type="tpassword" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your password" required />
         <br></br>
         <button className='text-white text-xl bg-red-400 p-2 rounded-2xl'>Register</button>

         </div>
         </form>

         <div className='ml-20 mt-44'>
         <img  className=' h-auto  rounded-2xl' src={ require('./image2.jpg') } />

         </div>
            
            </div>
            


    </div>);
}
 
export default Register;
