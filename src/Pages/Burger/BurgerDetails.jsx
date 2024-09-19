import React, { useContext, useState } from 'react';
import { CartContext } from '../../UseContext/CartContext';
const BurgerDetails = ({ burger }) => {

    const { category, description, id, image, name, price, varients } = burger

    const [quantity, setQuantity] = useState(1);
    const [varient, setVerient] = useState('small');

    const { addToCart } = useContext(CartContext); // Get addToCart from context

    // Function to handle adding to cart
    const handleAddToCart = () => {
        addToCart(burger, varient, parseInt(quantity));

    };


    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={image} alt="burger" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>

                <div className="card-actions justify-between">
                    <div className="badge badge-outline">Category:{category}</div>
                    <div className="badge badge-outline">Price:{price[0][varient] * quantity}BDT</div>

                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center'>
                        <p>Varient: </p>
                        <select className="select select-bordered w-2/3 max-w-xs" value={varient} onChange={(e) => { setVerient(e.target.value) }}>
                            {
                                varients.map((x, i) => { return <option key={i} value={x}>{x}</option> })
                            }
                        </select>
                    </div><div className='flex justify-center items-center'>
                        <p>Quantity:</p>
                        <select className='border rounded-lg w-1/3 max-w-xs ' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                            {[...Array(5).keys()].map((x, i) => {
                                return <option key={i} value={i + 1}>{i + 1}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="card-actions justify-between">
                    <div>
                        <button className="btn" onClick={() => document.getElementById(`my_modal_${id}`).showModal()}>Details</button>
                        <dialog id={`my_modal_${id}`} className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">{name}</h3>
                                <figure className='w-60 h-60'>
                                    <img src={image} alt="burger" />
                                </figure>
                                <p className="py-4">{description}</p>

                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                    <button className="btn bg-rose-500 shadow-lg shadow-rose-500/50 text-white hover:text-black" onClick={handleAddToCart}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BurgerDetails;