import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './RestaurantPage.css';

const RestaurantPage = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const fetchRestaurant = async () => {
            const response = await axios.get(`http://localhost:3000/api/restaurants/${id}`);
            setRestaurant(response.data);
        };

        fetchRestaurant();
    }, [id]);

    if (!restaurant) return <div>Loading...</div>;
    return (
        <div className="restaurant-detail-container">
            <div className="restaurant-detail">
                <img src={restaurant.featured_image} alt={restaurant.name} />
                <h2>{restaurant.name}</h2>
                <p className="address">{restaurant.location.address}</p>
                <p className="city">{restaurant.location.city}</p>
                <p className="country">{restaurant.location.country}</p>
                <p><u>Cuisines:</u> {Array.isArray(restaurant.cuisines) ? restaurant.cuisines.join(', ') : restaurant.cuisines}</p>
                <p className="rating">Rating: {restaurant.user_rating.aggregate_rating}</p>
                <p className="reviews">Reviews: {restaurant.user_rating.rating_text}</p>
            </div>
        </div>
    );
};

export default RestaurantPage;
