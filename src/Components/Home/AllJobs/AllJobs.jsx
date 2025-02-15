import React, { useEffect, useState } from 'react';
import SingleJob from './SingleJob';


const AllJobs = () => {
    const [allJobs,setAllJobs] = useState([])
    // console.log(allJobs)
    useEffect(()=>{
        fetch('https://next-level-two-ashen.vercel.app/jobs')
        .then(res=>res.json())
        .then(data=>setAllJobs(data))
    },[])
    return (
        <div>
            <div className="shadow-xl py-5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                <h1 className='text-white text-3xl text-center font-bold'>All Jobs</h1>
            </div>
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-20'>
                {
                    allJobs.length ? allJobs.map(job=><SingleJob key={job.id} job={job}></SingleJob>):<div>
                        <div className='flex gap-56 mx-14'>
                            <div className='w-56'>
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-32 w-56"></div>
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-32 w-full"></div>
                            </div>
                            <div>
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-32 w-56"></div>
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-32 w-full"></div>
                            </div>
                            <div>
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-32 w-56"></div>
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-32 w-full"></div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default AllJobs;