import React from 'react';

const Slider = () => {
    return (
        <div>
            <div className="shadow-xl my-10 py-5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                <h1 className='text-white text-3xl text-center font-bold uppercase'>Slider Section</h1>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <img src="https://i.ibb.co.com/fVFWRTf8/image-1.jpg" className="h-full w-full mx-auto" />
                <img src="https://i.ibb.co.com/R4HvdWk1/1.jpg" className="h-full w-full mx-auto" />
                <img src="
                https://i.ibb.co.com/9kXQbjRr/2.jpg" className="h-full w-full mx-auto" />
            </div>
        </div>
    );
};

export default Slider;