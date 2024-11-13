const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id.trim();
        console.log("Querying ID:", id);

        const restaurant = await Restaurant.findOne({ id: id });
        if (!restaurant) {
            console.log("Restaurant not found for ID:", id);
            return res.status(404).json({ message: "Restaurant not found" });
        }

        console.log("Restaurant found:", restaurant);
        res.json(restaurant);
    } catch (err) {
        console.error("Error while querying:", err);
        res.status(500).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 12 } = req.query;
        const count = await Restaurant.countDocuments();
        const restaurants = await Restaurant.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        res.json({
            restaurants,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        res.status(500).send(err);
    }
});



module.exports = router;
