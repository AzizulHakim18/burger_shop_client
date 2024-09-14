import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Sheared/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import ClerkSignIn from "../Register/ClerkSignIn";
import Burgers from "../Pages/Burger/Burgers";
import MyCart from "../Pages/MyCart/MyCart";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/signin",
                element: <ClerkSignIn></ClerkSignIn>
            },
            {
                path: "/order",
                element: <Burgers></Burgers>
            },
            {
                path: "/mycart",
                element: <MyCart></MyCart>
            },
        ]
    }
])