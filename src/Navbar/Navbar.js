import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( <div>

            <nav class="bg-black flex flex-wrap w-screen justify-end mx-auto sticky top-0   ">

                <ul class="flex px-28 py-5 space-x-6 text-white text-xl justify-end">
      
                    <Link to="/" class=" cursor-pointer ">Home</Link>
                    <Link to="/Register" class=" cursor-pointer ">Register</Link>
                    <Link to="/Login" class=" cursor-pointer ">Login</Link>
                    <Link to="/Allposts" class=" cursor-pointer ">Blogs</Link>
                    <li class=" text-orange-500 cursor-pointer"><a href="" class="font-bold">Logout</a></li>
                </ul>

            </nav>
        </div>
        
     );
}
 
export default Navbar;