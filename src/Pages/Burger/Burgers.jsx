import React from 'react';
import burgers from "../../../public/dummy/data.json"
import BurgerDetails from './BurgerDetails';
const Burgers = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    burgers.map((burger) => <BurgerDetails
                        key={burger.id}
                        burger={burger}
                    ></BurgerDetails>)
                }
            </div>
        </div>
    );
};

export default Burgers;