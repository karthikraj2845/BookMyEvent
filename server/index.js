const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.js');
const eventRoutes = require('./routes/events.js');
const bookingRoutes = require('./routes/bookings.js');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("BookMyEvent API is running 🚀");
});

app.use('/api/auth', authRoutes); 
// console.log(authRoutes);
// console.log(bookingRoutes);
app.use('/api/events', eventRoutes); 
app.use('/api/bookings', bookingRoutes);


mongoose.connect(process.env.MONGO_URI, {
}).then(() => { 
    console.log('Connected to MongoDB');
    const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected');
        console.log('Database Name:', mongoose.connection.name);
    })
    .catch(err => console.log(err));
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});