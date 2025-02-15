import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <div>
            <h1 className='text-3xl font-bold text-center'>This page is not available!</h1>
            <h1 className='text-center'>Please go<Link to={'/'}><span className='font-black text-xl text-green-500'>HomePage </span></Link></h1>
            </div>
        </div>
    );
};

export default ErrorPage;