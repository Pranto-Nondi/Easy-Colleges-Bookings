import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import CollegesCards from "../Pages/Home/CollegesCards/CollegesCards";
import CollegeDetails from "../Pages/Home/CollegeDetails/CollegeDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,

            },
            {
                path: '/',
                element: <CollegesCards />,

            },
            {
                path: '/collegeDetails/:id',
                element: <CollegeDetails />,
               


            }
            // {
            //     path: 'login',
            //     element: <Login />
            // },

        ]
    },


]);
export default router