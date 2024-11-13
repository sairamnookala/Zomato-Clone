import React from 'react';
import RestaurantList from '../components/RestaurantList';
import './HomePage.css'; // Import the CSS file
const zomato = "https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png";
const HomePage = () => {
    return (
        <div>
            <header className="homepage-header">
                <div className="overlay">
                    <img src ={zomato} className='title'></img>
                    <br></br>
                    <center><p className="site-subtitle">Discover the best food & drinks</p></center>
                    <div className="search-bar">
                        <center><input type="text" placeholder="Search for restaurant, cuisine or a dish" className="search-input"/></center>
                    </div>
                </div>
            </header>
            <br></br>
            <br></br>
            <RestaurantList />
        </div>
    );
};

export default HomePage;
