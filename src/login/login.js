import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    return ( 
    
   <div class="flex justify-center mt-14 ">
    <div class="md:w-1/2 bg-gray-900 p-8 mx-auto">
        <h1 class="text-4xl font-bold mb-8 text-white">Login Form</h1>
        <form>
            <div class="mb-4">
                <label class="block text-lg font-semibold  text-white">Email</label>
                <input type="text" class="w-full border border-gray-300 px-4 py-2 rounded-lg" placeholder="Enter your email"/>
            </div>
            <div class="mb-6">
                <label class="block text-lg font-semibold  text-white" >Password</label>
                <input type="password" class="w-full border border-gray-300 px-4 py-2 rounded-lg" placeholder="Enter your password"/>
            </div>
            <button class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600">Login</button>
        </form>
    </div>
    
</div> );
}
 
export default Login;