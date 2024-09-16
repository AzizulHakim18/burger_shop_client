import { useUser } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react';

const MyOrders = () => {

    const { user } = useUser(); // Clerk user data
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders for the logged-in user
        const fetchOrders = async () => {
            try {
                const response = await fetch(`http://localhost:8000/orders?email=${user?.emailAddresses[0].emailAddress}`);
                const data = await response.json();

                if (response.ok) {
                    setOrders(data);
                } else {
                    console.error("Error fetching orders:", data.message);
                }
            } catch (error) {
                console.error("Server error:", error);
            }
        };

        if (user?.emailAddresses[0].emailAddress) {
            fetchOrders();
        }
    }, [user]);



    return (
        <div className="min-h-screen w-full mx-auto bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10">My Orders</h1>
                {orders.length > 0 ? (
                    orders.map((order) => (
                        <div
                            key={order._id}
                            className="bg-white rounded-lg shadow-lg p-6 mb-6 animate-fade-in-up"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h2 className="text-xl font-semibold">Order Date: {new Date(order.orderDate).toLocaleDateString()}</h2>
                                    <p className="text-gray-600">Payment Method: {order.paymentMethod}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Customer: {order.customerInfo.name}</h3>
                                    <p className="text-sm text-gray-600">{order.customerInfo.email}</p>
                                    <p className="text-sm text-gray-600">ID: {order._id}</p>
                                </div>
                            </div>
                            <table className="table-auto w-full text-left border-collapse">
                                <thead>
                                    <tr>
                                        <th className="border-b-2 p-2">Item</th>
                                        <th className="border-b-2 p-2">Quantity</th>
                                        <th className="border-b-2 p-2">Varient</th>
                                        <th className="border-b-2 p-2">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.orderItems.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border-b p-2">
                                                <div className="flex items-center">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-12 h-12 object-cover rounded-md mr-4"
                                                    />
                                                    <div>
                                                        <p className="font-semibold">{item.name}</p>
                                                        <p className="text-sm text-gray-500">{item.category}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-b p-2">{item.quantity}</td>
                                            <td className="border-b p-2">{item.varient}</td>
                                            <td className="border-b p-2">{item.price} Taka</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h1 className='text-xl font-bold text-cyan-500 text-right'>Status: {order.status}</h1>
                        </div>

                    ))
                ) : (
                    <p className="text-center text-gray-600">No orders found.</p>
                )}
            </div>
        </div>
    );
};

export default MyOrders;