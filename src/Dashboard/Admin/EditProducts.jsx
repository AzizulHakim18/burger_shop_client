import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingSpin from "../../Sheared/LoadingSpin"
import { useRole } from '../../UseContext/RoleContext';
const EditProducts = () => {
    const { id } = useParams();  // Get the burger ID from the URL
    const navigate = useNavigate();  // For navigation after the update
    const role = useRole()
    // State to hold the form data
    const [burger, setBurger] = useState({
        id: '',
        name: '',
        category: '',
        varients: ['small', 'medium', 'large'],
        price: [
            {
                small: '',
                medium: '',
                large: '',
            },
        ],
        image: '',
        description: '',
    });

    const [successMessage, setSuccessMessage] = useState('');

    // Fetch the existing burger data when the component loads
    useEffect(() => {
        const fetchBurger = async () => {
            try {
                const response = await fetch(`http://localhost:8000/burger/${id}`);

                if (!response.ok) {
                    throw new Error(`Burger with ID ${id} not found`);
                }

                const data = await response.json();
                setBurger(data);  // Set the fetched burger data into state
            } catch (error) {
                console.error('Error fetching burger:', error);
            }
        };

        fetchBurger();
    }, [id]);

    // Handler to update the form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Handling price fields separately
        if (name === 'small' || name === 'medium' || name === 'large') {
            setBurger({
                ...burger,
                price: [
                    {
                        ...burger.price[0],
                        [name]: value,
                    },
                ],
            });
        } else {
            setBurger({
                ...burger,
                [name]: value,
            });
        }
    };

    // Submit the updated burger data to the backend
    const handleEditSubmit = async () => {
        // Assuming `burger` is the object containing the data
        const { _id, ...updatedBurgerData } = burger;

        try {
            const response = await fetch(`http://localhost:8000/editburger/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBurgerData),  // Exclude _id
            });

            if (response.ok) {
                console.log("Burger updated successfully");
            } else {
                console.error("Failed to update burger");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <div className="p-6 w-full md:w-2/3 mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Edit Burger {burger.name}</h1>

            <form onSubmit={handleEditSubmit}>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="mb-4">
                        <label className="block text-gray-700">Burger Name</label>
                        <input
                            type="text"
                            name="name"
                            value={burger.name}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Enter burger name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Category</label>
                        <select
                            name="category"
                            value={burger.category}
                            onChange={handleChange}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="">Select category</option>
                            <option value="veg">Veg</option>
                            <option value="non-veg">Non-Veg</option>
                        </select>
                    </div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                    <div className="mb-4">
                        <label className="block text-gray-700">Small Price</label>
                        <input
                            type="number"
                            name="small"
                            value={burger.price[0]?.small || ''}  // Fill with existing small price
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Enter price for small size"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Medium Price</label>
                        <input
                            type="number"
                            name="medium"
                            value={burger.price[0]?.medium || ''}  // Fill with existing medium price
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Enter price for medium size"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Large Price</label>
                        <input
                            type="number"
                            name="large"
                            value={burger.price[0]?.large || ''}  // Fill with existing large price
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Enter price for large size"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={burger.image}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter image URL"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={burger.description}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full"
                        placeholder="Enter burger description"
                        required
                    />
                </div>

                <div className='w-full flex justify-end'>
                    <button
                        type="submit"
                        className="btn btn-outline w-1/3"
                        onClick={(e) => {
                            if (role === 'admin' || role === 'editor') {
                                // Allow form submission to update the burger
                            } else {
                                e.preventDefault(); // Prevent form submission
                                alert('You do not have permission to update this burger.');
                            }
                        }}
                    >
                        Update Burger
                    </button>
                </div>
            </form>

            {successMessage && (
                <div className="mt-4 text-green-600 font-bold">{successMessage}</div>
            )}
        </div>
    );
};

export default EditProducts;