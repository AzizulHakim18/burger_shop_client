import React, { useContext } from 'react';
import { CartContext } from '../../UseContext/CartContext';

const CartItem = ({ item }) => {
    console.log(item);
    const { category, image, name, price, quantity, varient } = item

    const { incrementQuantity, decrementQuantity, removeItem } = useContext(CartContext);

    return (

        <tr>
            {/* Name and Avatar Column */}
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image}
                                alt={name}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>  {/* Use dynamic name */}
                        <div className="text-sm opacity-50">{category}</div>  {/* Use dynamic category */}
                    </div>
                </div>
            </td>

            {/* Job Column */}
            <td>
                {varient}
                <br />
                <span className="badge badge-ghost badge-sm">Price:{price} BDT</span>
            </td>

            {/* Favorite Color Column */}
            <td>
                <div className="flex items-center gap-2">
                    <button
                        className="btn btn-sm"
                        onClick={() => decrementQuantity(item.id, varient)}
                    >
                        -
                    </button>
                    <span>{quantity}</span>
                    <button
                        className="btn btn-sm"
                        onClick={() => incrementQuantity(item.id, varient)}
                    >
                        +
                    </button>
                </div>
            </td>  {/* Use dynamic quantity */}

            <td><button className='btn btn-sm btn-error' onClick={() => removeItem(item.id, varient)}>Delete</button></td>
        </tr>



    );
};

export default CartItem;