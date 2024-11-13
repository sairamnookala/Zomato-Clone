import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
    const getRatingClass = (rating) => {
        if (rating >= 4.0) return 'high';
        if (rating >= 3.0) return 'medium';
        return 'low';
    };

    return (
        <div className="restaurant-card">
            <img src={restaurant.thumb} alt={restaurant.name} className="restaurant-image" />
            <div className="restaurant-info">
                <h3>{restaurant.name}</h3>
                <p>{restaurant.cuisines}</p>
                <p>₹{restaurant.average_cost_for_two} for two</p>
                <p className={`rating ${getRatingClass(restaurant.user_rating.aggregate_rating)}`}>
                    {restaurant.user_rating.aggregate_rating} ★
                </p>
                <Link to={`/restaurants/${restaurant.id}`} className="view-details">View Details</Link>
            </div>
        </div>
    );
};

export default RestaurantCard;
