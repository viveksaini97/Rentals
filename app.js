const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware

const app = express();
app.use(express.json());
app.use(cors()); // Use cors middleware

// Define Property Schema
const propertySchema = new mongoose.Schema({
    media: String,
    description: String,
    price: Number,
    address: String,
    propertySummary: {
        buildingType: String,
        stories: Number,
        roomType: String,
        distanceToCollege: Number,
        nearestBusStop: String,
        utilities: Boolean,
        furnishing: String,
        amenities: [String]
    },
    sellerInformation: {
        name: String,
        email: String,
        phone: String
    }
});

// Create Property model from schema
const Property = mongoose.model('Property', propertySchema);

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://rohanraina45:Sheena%40975@projectrentals.biidppa.mongodb.net/?retryWrites=true&w=majority&appName=ProjectRentals',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err.message);
});

//----CRUD Operations----

// Create a Property Listing (POST)
app.post('/properties', async (req, res) => {
    try {
        const property = await Property.create(req.body);
        res.status(201).json({ property });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get All Property Listings (GET)
app.get('/properties', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json({ properties });
    } catch (err) {
        console.error(err); // Log the error to the console
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get a Single Property Listing by ID (GET)
app.get('/properties/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json({ property });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a Property Listing (PUT)
app.put('/properties/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json({ property });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a Property Listing (DELETE)
app.delete('/properties/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json({ message: 'Property deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//------------

// Other middleware and routes can be defined here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
