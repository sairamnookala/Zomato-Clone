require('dotenv').config();  // Add this line at the very top to load the .env file

const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const restaurantRoutes = require('./routes/restaurants');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas using the environment variable
const uri = process.env.MONGODB_URI;  // Use the environment variable here
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Use the restaurant routes
app.use('/api/restaurants', restaurantRoutes);

const port = process.env.PORT || 3000;  // Use the PORT environment variable here
app.listen(port, () => console.log(`Listening on port ${port}...`));
