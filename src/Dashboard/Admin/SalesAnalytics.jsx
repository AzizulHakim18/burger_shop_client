import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const SalesAnalytics = () => {

    const [salesData, setSalesData] = useState([]);
    const [productSalesData, setProductSalesData] = useState([]);


    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await fetch('http://localhost:8000/admin/sales');
                const data = await response.json();
                setSalesData(data);
            } catch (error) {
                console.error('Error fetching sales data:', error);
            }
        };

        fetchSales();
    }, []);



    useEffect(() => {
        const fetchProductSales = async () => {
            try {
                const response = await fetch('http://localhost:8000/admin/sales/product');
                const data = await response.json();
                setProductSalesData(data);
            } catch (error) {
                console.error('Error fetching product sales data:', error);
            }
        };

        fetchProductSales();
    }, []);

    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Sales Overview</h1>
                <div className="w-full h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData}>
                            <Line type="monotone" dataKey="totalSales" stroke="#38bdf8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Sales Analytics</h1>
                <div className="w-full h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={productSalesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="product" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="totalSales" fill="#38bdf8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default SalesAnalytics;