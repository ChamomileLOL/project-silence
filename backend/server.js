const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load env vars

const app = express();
const PORT = process.env.PORT || 10000;

// MIDDLEWARE
app.use(cors({ origin: "*" })); // Allow all for now (Dev mode)
app.use(express.json());

// DATABASE CONNECTION (Atlas)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(">>> [DB] CONNECTED TO MONGODB ATLAS");
    } catch (err) {
        console.error(">>> [DB] CONNECTION FAILED:", err.message);
        process.exit(1);
    }
};

// CONNECT DB
connectDB();

// ROUTES
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// START
app.listen(PORT, '0.0.0.0', () => {
    console.log(`>>> [SERVER] LISTENING ON PORT ${PORT}`);
});