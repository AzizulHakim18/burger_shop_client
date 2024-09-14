import React, { useState } from 'react';

const AddProduct = () => {

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

    // Submit form data to the backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Generate a random id if needed, or allow MongoDB to auto-generate it
        const newBurger = {
            ...burger,
            id: burger.id || Math.floor(Math.random() * 1000), // Example id generator
        };

        try {
            const response = await fetch('http://localhost:8000/addburger', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBurger),
            });

            if (response.ok) {
                setSuccessMessage('Burger added successfully!');
                // Reset the form after submission
                setBurger({
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
            } else {
                throw new Error('Error adding burger');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="p-6 w-full md:w-2/3 mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Add a New Burger</h1>

            <form onSubmit={handleSubmit}>
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

                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                    <div className="mb-4">
                        <label className="block text-gray-700">Small Price</label>
                        <input
                            type="number"
                            name="small"
                            value={burger.price[0].small}
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
                            value={burger.price[0].medium}
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
                            value={burger.price[0].large}
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

                <button type="submit" className="btn btn-primary w-full">
                    Add Burger
                </button>
            </form>

            {successMessage && (
                <div className="mt-4 text-green-600 font-bold">{successMessage}</div>
            )}
        </div>
    );
};

export default AddProduct;