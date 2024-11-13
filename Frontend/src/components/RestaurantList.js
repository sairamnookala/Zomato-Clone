import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantCard from './RestaurantCard';
import './RestaurantList.css';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchRestaurants = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/api/restaurants?page=${currentPage}&limit=12`);
                console.log("API response:", response.data);

                if (Array.isArray(response.data)) {
                    setRestaurants(response.data);
                    setTotalPages(response.data.totalPages || 1);
                } else if (Array.isArray(response.data.restaurants)) {
                    setRestaurants(response.data.restaurants);
                    setTotalPages(response.data.totalPages || 1);
                } else {
                    console.error("Unexpected data structure:", response.data);
                }
            } catch (error) {
                console.error("Error fetching restaurants:", error);
            }
            setIsLoading(false);
        };

        fetchRestaurants();
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="restaurant-list">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className="cards-container">
                        {restaurants.map(restaurant => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        ))}
                    </div>
                    <div className="pagination">
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default RestaurantList;
