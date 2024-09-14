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
import ConfirmationForm from "../Pages/MyCart/ConfirmationForm";
import OrderSuccess from "../Sheared/OrderSuccess";
import MyOrders from "../Pages/MyOrders/MyOrders";
import Dashboard from "../Dashboard/Dashboard";
import AddProduct from "../Dashboard/AddProduct";
import AdminPannel from "../Dashboard/AdminPannel";



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
                path: "/menu",
                element: <Burgers></Burgers>
            },
            {
                path: "/mycart",
                element: <MyCart></MyCart>
            },
            {
                path: "/confirmorder",
                element: <ConfirmationForm></ConfirmationForm>
            },
            {
                path: "/ordersuccess",
                element: <OrderSuccess></OrderSuccess>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/dashboard/orderlist", // No need for "/dashboard/orderlist", just "orderlist"
                        element: <MyOrders></MyOrders>
                    },
                    {
                        path: "/dashboard/addproduct", // No need for "/dashboard/orderlist", just "orderlist"
                        element: <AddProduct></AddProduct>
                    },
                    {
                        path: "/dashboard/admin", // No need for "/dashboard/orderlist", just "orderlist"
                        element: <AdminPannel></AdminPannel>
                    },
                ]
            }

        ]


    }
])