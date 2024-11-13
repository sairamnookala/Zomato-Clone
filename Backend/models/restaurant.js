const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    country: String,
    average_cost_for_two: Number,
    cuisines: String,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
