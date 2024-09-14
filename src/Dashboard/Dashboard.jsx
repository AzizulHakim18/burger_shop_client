import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


const Dashboard = () => {
    return (
        <div className='flex justify-between  '>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-start justify-start mx-2">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden sticky top-16">
                        <FaBars className="w-6 h-6" />
                    </label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side sticky top-12">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full my-16 md:my-0 w-40 p-4 ">
                        {/* Sidebar content here */}
                        <li><Link to="/dashboard/orderlist">My Order</Link></li>
                        <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                        <li><Link to="/dashboard/admin">Admin Pannel</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;