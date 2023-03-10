import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import NotFound from "../Pages/NotFound/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json').then(res => res.json())
            },
            {
                path: '/service-details/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: async ({ params }) => {

                    const response = await fetch('/data.json');
                    const data = await response.json();

                    const service = data.find(d => d.id === parseFloat(params.id));
                    if (service) {
                        return service;
                    }
                    else {
                        return null;
                    }
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About></About>
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);