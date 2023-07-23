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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyCollege from "../Pages/MyCollege/MyCollege";

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
                element: <PrivateRoute><CollegeDetails /></PrivateRoute>,


            },
            {
                path: 'colleges',
                element: <PrivateRoute><Colleges /></PrivateRoute>,
            },
            {
                path: 'admission',
                element: <PrivateRoute><Admission /></PrivateRoute>,
            },
            {
                path: 'myCollege',
                element: <PrivateRoute><MyCollege /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }


        ]
    },


]);
export default router