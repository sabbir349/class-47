import React from 'react';
import Hero from './Hero';
import Categories from './Category/Categories';
import AllJobs from './AllJobs/AllJobs';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Hero></Hero>
            <div className='my-20'>
                <Categories></Categories>
            </div>
            <div className='my-20'>
                <Slider></Slider>
            </div>
            <div className='mb-20'>
                <AllJobs></AllJobs>
            </div>
        </div>
    );
};

export default Home;