import React from 'react';

const BurgerDetails = ({ burger }) => {

    const { category, description, id, image, name, price, varients } = burger
    console.log(id);
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="burger" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>

                <div className="card-actions justify-between">
                    <div className="badge badge-outline">Category:{category}</div>
                    <div className="badge badge-outline">Price:10BDT</div>

                </div>
                <div className='flex justify-between items-center'>
                    <p>Varient: </p>
                    <select className="select select-bordered w-1/2 max-w-xs">
                        {
                            varients.map((x) => { return <option value={x}>{x}</option> })
                        }
                    </select>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn bg-rose-500 shadow-lg shadow-rose-500/50 text-white hover:text-black">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BurgerDetails;