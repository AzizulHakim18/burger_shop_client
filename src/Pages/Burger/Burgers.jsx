import React, { useEffect, useState } from 'react';
import BurgerDetails from './BurgerDetails';
const Burgers = () => {
    const [burgers, setBurgers] = useState([])
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    const ITEMS_PER_PAGE = 6;

    useEffect(() => {
        const fetchBurgers = async () => {
            try {
                const response = await fetch(`https://burgershopserver-production.up.railway.app/burgerspagination?page=${currentPage}&limit=${ITEMS_PER_PAGE}`);
                const data = await response.json();
                setBurgers(data.burgers);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Error fetching burgers:', error);
            }
        };
        fetchBurgers();
    }, [currentPage])


    // Function to handle search
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter burgers based on search query
    const filteredBurgers = burgers.filter(burger =>
        burger.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pagination buttons
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };
    return (


        <div>
            {/* Search Input */}
            <div className="my-4 w-full flex justify-end">
                <input
                    type="text"
                    placeholder="Search for ..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="input input-bordered w-64 mx-auto"
                />
            </div>

            <div className='flex justify-center items-center'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        filteredBurgers.map((burger) => (
                            <BurgerDetails
                                key={burger.id}
                                burger={burger}
                            />
                        ))
                    }
                </div>
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-4 space-x-2">
                <button
                    className={`btn btn-outline ${currentPage === 1 ? 'btn-disabled' : ''}`}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    className={`btn btn-outline ${currentPage === totalPages ? 'btn-disabled' : ''}`}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Burgers;