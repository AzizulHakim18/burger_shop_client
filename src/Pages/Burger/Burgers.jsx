import React, { useEffect, useState } from 'react';
import BurgerDetails from './BurgerDetails';
const Burgers = () => {
    const [burgers, setBurgers] = useState([])

    useEffect(() => {

        fetch("http://localhost:8000/burgers")
            .then(response => response.json())
            .then(data => setBurgers(data))
    }, [])


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