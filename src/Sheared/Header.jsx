import { UserButton, useUser } from '@clerk/clerk-react';
import { UserRound } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../UseContext/CartContext';

const Header = () => {

    const { user, isLoaded, isSignedIn } = useUser()
    // console.log(user.id);

    const { cartItems } = useContext(CartContext);

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)

    console.log(totalPrice);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Review</Link></li>
                        <li><Link to="/contact">Contact</Link></li>

                    </ul>
                </div>
                <a className=" text-sm md:text-xl">Burger Shop</a>
                <img className='w-4 md:w-8 mx-1 md:mx-4' src="/logo.svg" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Review</Link></li>
                    <li><Link to="/contact">Contact</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item">{totalItems}</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">{totalItems} Items</span>
                            <span className="text-info">Subtotal:{totalPrice}BDT</span>
                            <div className="card-actions">
                                <Link to="/mycart" className="btn btn-primary btn-block"> View cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end mx-3">
                    {
                        !isSignedIn && isLoaded ? <Link to='./signin' className='btn btn-ghost btn-circle'><UserRound></UserRound></Link> : <UserButton></UserButton>
                    }
                </div>
                <div>
                    <Link to="/dashboard/orderlist" className='btn btn-outline'>Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;