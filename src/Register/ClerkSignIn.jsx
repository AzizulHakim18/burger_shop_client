import { SignIn } from '@clerk/clerk-react';
import React from 'react';

const ClerkSignIn = () => {
    return (
        <div className='w-full h-full flex justify-center items-center mt-20'>
            <SignIn></SignIn>
        </div>
    );
};

export default ClerkSignIn;