import React from 'react';

const CartItem = ({ item }) => {
    console.log(item);
    const { category, image, name, price, quantity, varient } = item
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
            <td>{quantity}</td>  {/* Use dynamic quantity */}


        </tr>



    );
};

export default CartItem;