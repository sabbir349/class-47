import React from 'react';
import { IoMdTime } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const SingleJob = ({ job }) => {
    // console.log(job)
    const { image, job_title, deadline, location, jobSummary ,_id} = job
    return (
        <div className='border rounded-lg shadow-xl'>
            <div className='flex items-center gap-8'>
                <img src={image} className='h-56 w-56' alt="" />
                <div className='pt-5 pr-5 pb-5'>
                    <h1 className='font-bold text-2xl'>{job_title}</h1>
                    <p className='text-justify'>{jobSummary.slice(0, 200)}....</p>
                    <p className='flex font-bold gap-2 mt-1'><IoMdTime className='text-xl mt-1' />{deadline}</p>
                    <p className='flex font-bold gap-2 mt-2'><IoLocationSharp className='text-xl mt-1' />{location}</p>
                </div>
            </div>
            <div className='flex justify-end'>
            <Link to={`job/${_id}`}><button className='px-10 py-4 bg-blue-600 text-white rounded-lg font-bold m-4'>Details</button></Link>
            </div>
        </div>
    );
};

export default SingleJob;