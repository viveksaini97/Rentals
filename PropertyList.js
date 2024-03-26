// PropertyList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/PropertyList.css'; // Import CSS file for styling

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/properties')
      .then(response => {
        setProperties(response.data.properties);
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
      });
  }, []);

  return (
    <div className="property-list">
      <h1>Property Listings</h1>
      <div className="cards-container">
        {properties.map(property => (
          <div className="card" key={property._id}>
            <img src={property.media} alt={property.description} />
            <div className="card-content">
              <h2>{property.description}</h2>
              <p><strong>Price:</strong> ${property.price}</p>
              <p><strong>Address:</strong> {property.address}</p>
              {/* Display other property details */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
