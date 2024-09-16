import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/dashboard/admin/order-management">Orders</Link></li>
                        <li><Link to="/dashboard/admin/product-management">Products</Link></li>
                        <li><Link to="/dashboard/admin/user-management">Users</Link></li>
                        <li><Link to="/dashboard/admin/analytics">Analytics</Link></li>

                    </ul>
                </div>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default Admin;