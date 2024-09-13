import React, { useEffect, useState } from 'react';
import Header from '../Sheared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheared/Footer';

const MainLayout = () => {

    return (
        <div>
            <div className='sticky top-0 z-10'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;