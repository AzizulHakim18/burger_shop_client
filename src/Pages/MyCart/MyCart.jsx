import React, { useContext } from 'react';
import { CartContext } from '../../UseContext/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const MyCart = () => {


    const { cartItems } = useContext(CartContext);
    console.log(cartItems);

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)

    return (
        <div className='flex flex-col md:flex-row justify-center items-center mt-10 gap-10'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* row 1 */}
                        {
                            cartItems.map((item) => <CartItem
                                key={item.id}
                                item={item}
                            ></CartItem>)
                        }
                    </tbody>

                </table>
            </div>

            {/* Right Subtotal Section */}
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Cart Summary</h2>
                <div className="flex justify-between mb-4">
                    <span className="text-lg">Total Items:</span>
                    <span className="text-lg">{totalItems}</span>
                </div>
                <div className="flex justify-between mb-4">
                    <span className="text-lg">Subtotal:</span>
                    <span className="text-lg font-semibold">{totalPrice} BDT</span>
                </div>
                <div className='flex justify-end'>
                    <Link to="/confirmorder"><button className="btn btn-outline mt-4 py-2 ">
                        Confirm Your Order
                    </button></Link>

                </div>
            </div>
        </div>
    );
};

export default MyCart;