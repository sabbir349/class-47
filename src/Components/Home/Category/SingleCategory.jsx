import React from 'react';
import { GrTechnology } from "react-icons/gr";

const SingleCategory = ({ category }) => {
    // console.log(category)
    const { img, category_name } = category
    return (
        <div className='flex justify-center rounded-xl drop-shadow-md ... border-2'>
            <div>
                <div>
                    <img className='h-56 w-56' src={img} alt="" />
                </div>
                <div className='flex justify-center items-center gap-3 my-5'>
                <GrTechnology /><h1 className='text-center text-xl font-bold'>{category_name}</h1>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;