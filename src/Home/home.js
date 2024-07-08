import React from 'react';
const Home = () => {
    return (<div>
        <div className='flex flex-wrap justify-around mt-20'>
            <div>
                <h1 className="text-white  text-4xl" >Welcome to Top blogs</h1>
                <p className="text-white   pt-7 ">Learn and grow and share your knowledge</p>
                <p className="text-white pt-7  ">But first you have to <span className='text-sky-400'>login</span></p>
            </div>

            <div className=''>
                <img className=' rounded-2xl h-auto ' src={require('./iamg1.jpg')} />
            </div>

        </div>
    </div>
    );
}

export default Home;