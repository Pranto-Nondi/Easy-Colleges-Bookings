import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import CollegesCards from "../Pages/Home/CollegesCards/CollegesCards";
import CollegeDetails from "../Pages/Home/CollegeDetails/CollegeDetails";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
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


            },
            {
                path: 'colleges',
                element: <Colleges />,
            },
            {
                path: 'admission',
                element: <Admission />,
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }


        ]
    },


]);
export default router