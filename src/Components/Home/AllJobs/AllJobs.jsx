import React, { useEffect, useState } from 'react';
import SingleJob from './SingleJob';


const AllJobs = () => {
    const [allJobs, setAllJobs] = useState([])
    const [showAll, setShowAll] = useState(true)

    const handleClick = () => {
        setShowAll(!showAll)
    }
    // console.log(allJobs)
    useEffect(() => {
        fetch('https://next-level-two-ashen.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setAllJobs(data))
    }, [])
    return (
        <div>
            <div className="shadow-xl py-5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                <h1 className='text-white text-3xl text-center font-bold uppercase'>All Jobs</h1>
            </div>
            <div className='mt-20 '>

                {
                    showAll ? <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 duration-200'>
                            {
                                allJobs.length ? allJobs.slice(0, 4).map(job => <SingleJob key={job._id} job={job}></SingleJob>) : <div>
                                    <div className='flex gap-[800px]'>
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
                                    </div>
                                </div>
                            }</div>
                    </div> : <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                            {
                                allJobs.length ? allJobs.map(job => <SingleJob key={job._id} job={job}></SingleJob>) : <div>
                                    <div className='flex'>
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
                                    </div>
                                </div>
                            }
                        </div>
                    </div>


                }

            </div>
            <div className='mt-5 text-center'>
                {
                    showAll ? <button onClick={handleClick} className='px-10 py-4 bg-blue-600 text-white rounded-lg font-bold m-4'>Show All</button> : <button onClick={handleClick} className='px-10 py-4 bg-blue-600 text-white rounded-lg font-bold m-4'>Show Less</button>
                }

            </div>
        </div>
    );
};

export default AllJobs;