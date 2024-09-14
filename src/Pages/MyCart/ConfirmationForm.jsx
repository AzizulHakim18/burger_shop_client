import { useUser } from '@clerk/clerk-react';
import React, { useState } from 'react';


const ConfirmationForm = () => {

    const { user } = useUser();  // Clerk user data
    console.log(user?.emailAddresses[0].emailAddress);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        paymentMethod: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data: ", { ...formData, email: user.email });
        // Add logic to handle form submission or payment processing
    };




    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-12 w-full max-w-2xl">


                <h2 className="text-3xl font-bold text-center mb-8">Payment Information</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={user?.fullName}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user?.emailAddresses[0].emailAddress}
                            className="input input-bordered w-full bg-gray-100"
                            readOnly
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-2">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-2">Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full"
                            placeholder="Enter your delivery address"
                            required
                        />
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-4">Choose Payment Method:</h3>
                        <div className="flex gap-6">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Online Payment"
                                    onChange={handleChange}
                                    className="radio"
                                    required
                                />
                                <span className="text-sm">Online Payment</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Cash on Delivery"
                                    onChange={handleChange}
                                    className="radio"
                                    required
                                />
                                <span className="text-sm">Cash on Delivery</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                        <button
                            type="submit"
                            className="btn btn-primary w-1/2 mr-2 animate-pulse hover:animate-none"
                        >
                            Pay Now
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary w-1/2 ml-2"
                            onClick={() => console.log('Cash on Delivery')}
                        >
                            Cash on Delivery
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConfirmationForm;