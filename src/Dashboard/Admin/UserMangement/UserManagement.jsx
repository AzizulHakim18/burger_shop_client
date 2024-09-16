import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../../UseContext/UsersContext';

const UserManagement = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        role: 'editor', // default to editor
        permissions: [],
        image: '',
    });
    const [imagePreview, setImagePreview] = useState(null);
    const { users, setUsers } = useUserContext();
    // Handle form input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setUser({
                ...user,
                permissions: checked
                    ? [...user.permissions, value]
                    : user.permissions.filter((perm) => perm !== value),
            });
        } else {
            setUser({ ...user, [name]: value });
        }
    };

    // Handle image file change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setUser({ ...user, image: file });
        setImagePreview(URL.createObjectURL(file)); // Preview the image
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Submit the form data (including image) to the backend here.

        try {
            const response = await fetch('http://localhost:8000/adduser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            console.log('User added:', data);
            setUsers([data.user, ...users]);
        } catch (error) {
            console.error('Error adding user:', error);
        }

        // Reset form
        setUser({ name: '', email: '', role: 'editor', permissions: [], image: '' });
        setImagePreview(null);
    };

    // Fetch users from backend (dummy data here)
    useEffect(() => {
        // Fetch users
        const fetchUsers = async () => {
            const res = await fetch('http://localhost:8000/serviceusers');
            const data = await res.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);


    return (
        <div className="container mx-auto p-6">
            {/* Display list of users */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user, index) => (
                    <div key={index} className="card bg-white shadow-lg p-4 rounded-lg">
                        <div className="flex items-center">
                            <img src={user.image || 'https://via.placeholder.com/150'} alt={user.name} className="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <h2 className="text-xl font-bold">{user.name}</h2>
                                <p>{user.email}</p>
                                <p className={`mt-2 text-sm ${user.role === 'admin' ? 'text-red-600' : 'text-blue-600'}`}>
                                    {user.role === 'admin' ? 'Admin' : 'Editor'}
                                </p>
                            </div>
                        </div>

                        {/* Permissions */}
                        <div className="mt-4">
                            <p className="font-semibold">Permissions:</p>
                            <ul className="list-disc list-inside">
                                {user.permissions.map((perm, i) => (
                                    <li key={i}>{perm}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className="text-2xl font-bold m-4 text-center">Add a New User</h1>
            {/* Form for adding new user */}
            <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Enter user name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Enter user email"
                            required
                        />
                    </div>

                    {/* Role */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Role</label>
                        <select
                            name="role"
                            value={user.role}
                            onChange={handleChange}
                            className="select select-bordered w-full"
                        >
                            <option value="admin">Admin</option>
                            <option value="editor">Editor</option>
                        </select>
                    </div>

                    {/* Permissions */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Permissions</label>
                        <div className="flex flex-col">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="permissions"
                                    value="read"
                                    checked={user.permissions.includes('read')}
                                    onChange={handleChange}
                                    className="checkbox checkbox-primary"
                                />
                                <span className="ml-2">Read</span>
                            </label>
                            <label className="inline-flex items-center mt-2">
                                <input
                                    type="checkbox"
                                    name="permissions"
                                    value="write"
                                    checked={user.permissions.includes('write')}
                                    onChange={handleChange}
                                    className="checkbox checkbox-primary"
                                />
                                <span className="ml-2">Write</span>
                            </label>
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Profile Image</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            className="input input-bordered w-full"
                            accept="image/*"
                        />
                    </div>
                </div>

                {/* Image Preview */}
                {imagePreview && (
                    <div className="mb-4">
                        <img src={imagePreview} alt="Image Preview" className="w-32 h-32 rounded-full mx-auto" />
                    </div>
                )}

                <div className="text-right">
                    <button type="submit" className="btn btn-outline">
                        Add User
                    </button>
                </div>
            </form>


        </div>
    );
};

export default UserManagement;