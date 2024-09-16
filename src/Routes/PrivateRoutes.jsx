import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react'; // Clerk's useUser hook for authentication
import LoadingSpinner from '../Sheared/LoadingSpin'; // Replace with your actual spinner component

const PrivateRoutes = ({ children }) => {
    const { isSignedIn, isLoaded } = useUser(); // Clerk's authentication state
    const location = useLocation();

    // Show spinner while Clerk is still loading the authentication state
    if (!isLoaded) {
        return <LoadingSpinner />;
    }

    // If the user is signed in, render the child components (protected routes)
    if (isSignedIn) {
        return children;
    }

    // If not signed in, redirect to login page and preserve the location
    return <Navigate to='/signin' state={{ from: location }} replace />;
};

export default PrivateRoutes;