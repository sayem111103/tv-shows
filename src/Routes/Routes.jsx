import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Summary from "../Pages/Summary/Summary";
import axios from "axios";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/bookings',
                element:<Bookings></Bookings>
            },
            {
                path:'/summary/:id',
                element:<Summary></Summary>,
                loader:({params})=> axios.get(`https://api.tvmaze.com/shows/${params.id}`)
            }
        ]
    }
])

export default router