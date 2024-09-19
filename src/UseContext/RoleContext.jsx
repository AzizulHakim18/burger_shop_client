import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import toast from 'react-hot-toast';

// Create the context
const RoleContext = createContext();

// Provider component to wrap around your app
export const RoleProvider = ({ children }) => {
    const { user } = useUser();
    const [role, setRole] = useState(null);

    useEffect(() => {
        const fetchRole = async () => {
            try {
                const response = await fetch('https://burgershopserver-production.up.railway.app/serviceusers');
                const data = await response.json();
                const matchedUser = data.find((u) => u.email === user.primaryEmailAddress.emailAddress);
                setRole(matchedUser ? matchedUser.role : 'user');
            } catch (error) {
                console.error('Error fetching user role:', error);
                toast.error('Error fetching user role:', error)
            }
        };

        if (user) {
            fetchRole();
        }
    }, [user]);

    return (
        <RoleContext.Provider value={role}>
            {children}
        </RoleContext.Provider>
    );
};

// Hook to use the role in any component
export const useRole = () => {
    return useContext(RoleContext);
};