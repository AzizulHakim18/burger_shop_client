import React, { useContext } from 'react';
import { CartContext } from '../../UseContext/CartContext';
import CartItem from './CartItem';

const MyCart = () => {


    const { cartItems } = useContext(CartContext);
    console.log(cartItems);

    return (
        <div className='flex justify-center items-center mt-10 '>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr>

                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>

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
        </div>
    );
};

export default MyCart;