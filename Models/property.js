const mongoose = require('mongoose');

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

module.exports = mongoose.model('Property', propertySchema);
