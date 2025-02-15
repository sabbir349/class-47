import Root from '../Components/Root/Root'
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../Components/Error/ErrorPage';
import Home from '../Components/Home/Home';
import AppliedJobs from '../Components/Applied/AppliedJobs';
import Blogs from '../Components/Blogs/Blogs';
import Signin from '../Components/SignIn/Signin';

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
                    element:<AppliedJobs></AppliedJobs>
                },
                {
                    path:'/blogs',
                    element:<Blogs></Blogs>
                },
                {
                    path:'/signin',
                    element:<Signin></Signin>
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