import React, { useEffect, useState } from 'react';
import { useRole } from '../../UseContext/RoleContext';

const OrderMange = () => {

    const [orders, setOrders] = useState([]);
    const role = useRole()
    useEffect(() => {
        // Fetch orders from the server
        const fetchOrders = async () => {
            try {
                const response = await fetch("http://localhost:8000/admin/orders");
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, []);

    // Handle order status update
    const updateOrderStatus = async (orderId, status) => {
        try {
            await fetch(`http://localhost:8000/admin/orders/${orderId}/status`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status }),
            });
            setOrders(orders.map(order => order._id === orderId ? { ...order, status } : order));
        } catch (error) {
            console.error("Error updating order status:", error);
        }
    };

    // Handle order delete
    const deleteOrder = async (orderId) => {
        try {
            await fetch(`http://localhost:8000/admin/orders/${orderId}`, {
                method: "DELETE",
            });
            setOrders(orders.filter(order => order._id !== orderId));
        } catch (error) {
            console.error("Error deleting order:", error);
        }
    };
    return (
        <div className="container mx-auto py-8">
            <p className='text-rose-500'>Totall {orders.length} orders</p>
            <h1 className="text-3xl font-bold text-center">All Orders</h1>
            {orders.length > 0 ? (
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>ID</th>
                            <th>Items</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td>{order.customerInfo.name || order.customerInfo.email}</td>
                                <td>{order._id}</td>
                                <td>
                                    <ul>
                                        {order.orderItems.map(item => (
                                            <li key={item.id}>{item.name} (x{item.quantity})</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>{order.status || 'Order Processing'}</td>
                                <td className="space-x-2">
                                    <button
                                        className="btn btn-sm btn-info"
                                        onClick={() => {
                                            if (role === 'admin' || role === 'editor') {
                                                updateOrderStatus(order._id, "Order Processing");
                                            } else {
                                                alert('You do not have permission to process the order.');
                                            }
                                        }}
                                    >
                                        Process
                                    </button>

                                    <button
                                        className="btn btn-sm btn-success"
                                        onClick={() => {
                                            if (role === 'admin' || role === 'editor') {
                                                updateOrderStatus(order._id, "Delivered");
                                            } else {
                                                alert('You do not have permission to deliver the order.');
                                            }
                                        }}
                                    >
                                        Delivered
                                    </button>

                                    <button
                                        className="btn btn-sm btn-error"
                                        onClick={() => {
                                            if (role === 'admin') {
                                                deleteOrder(order._id);
                                            } else {
                                                alert('Only admins can cancel orders.');
                                            }
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center">No orders found.</p>
            )}
        </div>
    );
};

export default OrderMange;