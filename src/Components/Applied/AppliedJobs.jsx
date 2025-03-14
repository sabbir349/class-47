import React, { useEffect, useState } from 'react';
import { deleteDataFromLocalStorage, getDataFromLocalStorage } from '../../LocalStorage/LocalStorage';
import { useLoaderData } from 'react-router-dom';
import SingleAppliedJobs from './SingleAppliedJobs';

const AppliedJobs = () => {
    const values = useLoaderData()
    const [allData, setAllData] = useState([])
    // console.log(values)
    useEffect(() => {
        const data = getDataFromLocalStorage()
        if (data) {
            const empty = []
            for (const da of data) {
                const filterData = values.find(value => value._id === da)
                empty.push(filterData)
            }
            setAllData(empty)
        }
    }, [values])
    const handleDelete=(id)=>{
        const filterData = allData.filter(data=>data._id !== id)
        deleteDataFromLocalStorage(id)
        setAllData(filterData)
    }
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className="shadow-xl py-5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                <h1 className='text-white text-3xl text-center font-bold uppercase'>Applied Jobs</h1>
            </div>
            <select className="select select-bordered select-lg w-full max-w-xs mt-5">
                <option disabled selected>Select</option>
                <option>Dhaka</option>
                <option>Chittagong</option>
                <option>Gazipur</option>
                <option>Rajshahi</option>
            </select>
            <div>
                {
                    allData.map(data => <SingleAppliedJobs key={data._id} data={data} handleDelete={handleDelete}></SingleAppliedJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;