import React from 'react';
import { deleteDataFromLocalStorage } from '../../LocalStorage/LocalStorage';

const SingleAppliedJobs = ({ data,handleDelete }) => {
    const { image, jobSummary, job_title, location } = data

    return (
        <div className='border my-10 shadow-xl pr-10'>
            <div className='flex items-center gap-10'>
                <div>
                    <img className='w-72 h-36' src={image} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>{job_title}</h1>
                    <p className='text-justify'>{jobSummary.slice(0, 200)}</p>
                    <p className='font-bold mt-2'>location : {location}</p>
                    <div className='flex justify-end'>
                        <button className='px-10 py-4 bg-blue-600 text-white my-3 rounded-xl font-bold' onClick={()=>handleDelete(data?._id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAppliedJobs;