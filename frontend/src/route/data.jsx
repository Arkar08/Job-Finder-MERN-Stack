
import Layout from "../layout/Layout";
import Main from "../layout/Main";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ApplicationStatus from "../pages/employer/ApplicationStatus";
import Employer from "../pages/employer/Employer";
import Application from "../pages/job_seeker/Application";
import Home from "../pages/job_seeker/Home";
import NotFound from "../pages/Notfound/NotFound";

export const routes = [
    {
        path:'/auth/login',
        Component:Login
    },
    {
        path:'/auth/signup',
        Component:Signup
    },
    {
        path:'/',
        Component:Main,
        errorElement:NotFound,
        children:[
            {
                index:true,
                Component:Layout
            },
            {
                path:'seeker',
                children:[
                    {   
                        index:true,
                        Component:Home
                    },
                    {
                        path:'applicaton',
                        Component:Application
                    }
                ]
            },
            {
                path:'employer',
                children:[
                    {
                        index:true,
                        Component:Employer
                    },
                    {
                        path:'status',
                        Component:ApplicationStatus
                    }
                ]
            }
          
        ]
    },
]