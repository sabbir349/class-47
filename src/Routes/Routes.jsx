import Root from '../Components/Root/Root'
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../Components/Error/ErrorPage';
import Home from '../Components/Home/Home';
import AppliedJobs from '../Components/Applied/AppliedJobs';
import Blogs from '../Components/Blogs/Blogs';
import Signin from '../Components/SignIn/Signin';
import JobDetails from '../Components/Home/AllJobs/Jobdetails/JobDetails';
import SignUp from '../SignUp/SignUp';
import PrivateRoute from './Private Route/PrivateRoute';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Root></Root>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/jobs',
                    loader:()=>fetch('https://next-level-two-ashen.vercel.app/jobs'),
                    element:<PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
                },
                {
                    path:'/blogs',
                    element:<PrivateRoute><Blogs></Blogs></PrivateRoute>
                },
                {
                    path:'/signin',
                    element:<Signin></Signin>
                },
                {
                    path:'/register',
                    element:<SignUp></SignUp>
                },
                {
                    path:'/job/:jobId',
                    loader:({params})=>fetch(`https://next-level-two-ashen.vercel.app/jobs/${params.jobId}`),
                    element:<JobDetails></JobDetails>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    );
};

export default Routes;