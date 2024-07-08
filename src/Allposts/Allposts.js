import React from 'react';
const Allposts = () => {
    return ( <div>
<div className='h-24 w-full' style={{"background-image": "url('https://picsum.photos/1920/1080')" }}>
            <h1 class="pl-16 pt-16 text-2xl text-red-900 ">Write a blog </h1>
            <button class="  text-white text-lg  bg-red-500 ml-16 p-3 rounded-md mt-2 hover:text-black">Let,s start</button>
        </div>


<h1 className='text-white text-center mt-9 text-3xl'>All posts</h1>

<div class="flex flex-wrap justify-center space-x-4 mt-24">
<div class=" h-80 w-80 rounded-md bg-gray-900 text-lg text-center text-white p-2 ">Title
<p className='mt-2'>body</p>

    </div>

    <div class=" h-80 w-80 rounded-md bg-gray-900 text-lg text-center text-white p-2 ">Title
    <p className='mt-2 '>body</p>

    </div>
    <div class=" h-80 w-80 rounded-md bg-gray-900 text-lg text-center text-white p-2 ">Title
    <p className='mt-2'>body</p>

    </div>
    <div class=" h-80 w-80 rounded-md bg-gray-900 text-lg text-center text-white p-2 ">Title
    <p className='mt-2'>body</p>

    </div>
    </div>
    
</div> );
}
 
export default Allposts;