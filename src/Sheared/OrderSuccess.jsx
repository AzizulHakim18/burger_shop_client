import React from 'react';
import Lottie from 'lottie-react';
import successAnimation from '../../public/Animation - 1726310082713.json'; // Replace with actual Lottie JSON
import { Link } from 'react-router-dom';
const OrderSuccess = () => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className='flex justify-center h-1/3 w-1/3'>
                <Lottie animationData={successAnimation} loop={true} className="w-1/2" />
            </div>
            <h2 className="text-3xl font-bold">Thank You for Your Order!</h2>
            <p className="mt-2 text-lg">We appreciate your Time. Your order will be processed soon.</p>
            <Link to="/" className="mt-6 btn btn-outline ">Go to Home</Link>
        </div>
    );
};

export default OrderSuccess;