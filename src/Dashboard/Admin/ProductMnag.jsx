import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductMnag = () => {

    const [burgers, setBurgers] = useState([]);
    const navigate = useNavigate()
    console.log(burgers._id);
    // Fetch burger data
    useEffect(() => {
        fetch('http://localhost:8000/burgers')
            .then((response) => response.json())
            .then((data) => setBurgers(data))
            .catch((error) => console.error('Error fetching burgers:', error));
    }, []);



    // Handle delete (placeholder function)
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/burgers/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setBurgers(burgers.filter(burger => burger._id !== id));
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };


    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Product Management</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full bg-white shadow-md rounded">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-2 text-left">Image</th>
                            <th className="p-2 text-left">ID</th>
                            <th className="p-2 text-left">Name</th>
                            <th className="p-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {burgers.map((burger) => (
                            <tr key={burger._id} className="border-t">
                                <td key={burger._id} className="p-2">
                                    <img src={burger.image} alt={burger.name} className="w-16 h-16 rounded" />
                                </td>
                                <td key={burger._id} className="p-2">{burger._id}</td>
                                <td key={burger._id} className="p-2">{burger.name}</td>
                                <td key={burger._id} className="p-2 flex space-x-2">
                                    <button
                                        className="btn btn-outline"
                                        onClick={() => navigate(`/dashboard/admin/edit/${burger._id}`)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-outline btn-error"
                                        onClick={() => handleDelete(burger._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductMnag;