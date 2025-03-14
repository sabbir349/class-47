import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { GiSkills } from "react-icons/gi";
import { GiClassicalKnowledge } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { FaTasks } from "react-icons/fa";
import { getDataFromLocalStorage, setDataToLocalStorage } from '../../../../LocalStorage/LocalStorage';

const JobDetails = () => {
    const values = useLoaderData()
    const { _id, image, description, job_title, skills, category_name, location, companyName, duty_hours, experience, deadline, salary, postDate } = values;

    const navigate = useNavigate()
    const handleApply = () => {
        // toast('Applied Successfully')
        const data = getDataFromLocalStorage()
        const filterData = data.find(da => da === _id)
        if (!filterData) {
            setDataToLocalStorage(_id)
            toast.success('Applied Successfully')
            navigate('/jobs')
        }
        else {
            toast.error('you have already applied for this job')
        }
    }
    return (
        <div className='mt-10 max-w-7xl mx-auto'>
            <div className="shadow-xl py-5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                <h1 className='text-white text-3xl text-center font-bold uppercase'>All Jobs</h1>
            </div>
            <div className='grid grid-cols-3 max-w-7xl mx-auto mt-20 gap-10 mb-20'>
                <div className='col-span-2 border rounded-xl'>
                    <div className='shadow-xl'>
                        <img src={image} className='w-full h-[300px] rounded-xl' alt="" />
                        <div className='p-10'>
                            <h1 className='text-2xl font-bold mb-5 text-center '>{job_title}</h1>
                            <p className='text-justify text-xl font-semibold'>{description}</p>
                        </div>
                    </div>
                </div>
                <div className='border shadow-xl rounded-xl p-5 font-bold'>
                    <p className='text-2xl mt-5'>Company : {companyName}</p>
                    <p className='mt-1'>Category : {category_name}</p>
                    <p className='mt-5 flex gap-1'><GiSkills className='text-3xl' />Skills : {skills}</p>
                    <div className='mt-5  flex justify-between items-center'>
                        <p className='flex gap-1 '><GiClassicalKnowledge className='text-xl mt-1' />Experience : {experience} Years</p>
                        <p className='flex font-bold gap-2 mt-1 items-center'><IoLocationSharp className='text-xl mt-1' />{location}</p>
                    </div>
                    <div className='mt-3'>
                        <p className='flex items-center gap-1'><GiMoneyStack className='mt-1 text-xl' />Salary : {salary}</p>
                        <div className='mt-5'>
                            <p className='flex items-center gap-1'><FaTasks className='mt-1' />Duty : {duty_hours}</p>
                        </div>
                    </div>
                    <p className='flex mt-5 items-center gap-1'><MdOutlineCalendarMonth />Post date : {postDate}</p>
                    <p className='flex mt-5 items-center gap-1'><MdOutlineCalendarMonth />Deadline : {deadline}</p>
                    <div className='mt-10 text-center'>
                        <button onClick={handleApply} className='px-10 py-4 bg-blue-600 text-white rounded-lg font-bold m-4'>Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;