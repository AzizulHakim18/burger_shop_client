import { useUser } from '@clerk/clerk-react';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../UseContext/CartContext';
// import CheckOut from './CheckOut';
import toast from 'react-hot-toast';



const ConfirmationForm = () => {

    const { user } = useUser();  // Clerk user data
    const { cartItems, setCartItems } = useContext(CartContext)
    console.log(setCartItems);
    const navigate = useNavigate();

    // Form state
    const [formData, setFormData] = useState({
        name: user?.fullName || "",  // Pre-fill name if available from Clerk
        phone: "",
        address: "",
        paymentMethod: "",
    });

    // Handle form data changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };





    // Handle cash on delivery
    const handleCashOnDelivery = () => {


        // Check if any form data is missing
        if (!formData.name || !formData.phone || !formData.address) {
            alert("Please fill in all required fields.") // Alert if any field is missing
            return;
        }
        // Prepare the order data to send to the backend
        const orderData = {
            customerInfo: {
                name: formData.name,
                email: user?.emailAddresses[0]?.emailAddress,
                phone: formData.phone,
                address: formData.address,
            },
            orderItems: cartItems, // Include cart items in the order
            paymentMethod: "Cash on Delivery",
            orderDate: new Date(),
        };
        console.log(orderData);

        // Use fetch to send POST request to the server
        fetch("https://burgershopserver-production.up.railway.app/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Order placed successfully:", data);
                alert("Order placed successfully!");
                localStorage.removeItem("cartItems");
                setCartItems([]);
                navigate('/ordersuccess');
            })
            .catch(error => {
                console.error("Error placing order:", error);
                alert("Failed to place order. Please try again.");
            });


    };



    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-12 w-full max-w-2xl">


                <h2 className="text-3xl font-bold text-center mb-8">Payment Information</h2>

                <form className="space-y-6">
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

                        {/* <CheckOut ></CheckOut> */}

                        <button
                            type="button"
                            className="btn btn-outline w-1/2 ml-2"
                            onClick={handleCashOnDelivery}
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