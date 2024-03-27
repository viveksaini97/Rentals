// PropertyList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/PropertyList.css'; // Import CSS file for styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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
      <h1 className='text-center font-bold text-4xl text-[#5175AE] italic  mb-[25px]'>Property Listings</h1>
      <div className="cards-container ">
        {properties.map(property => (
           <Link to={`/property/${property._id}`} key={property._id}>
          <div className="card max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-600 " key={property._id}>
            <img src={property.media} alt={property.description} />
            <div className="card-content">
              <h2 className='roboto-bold-italic' >{property.description}</h2>
              <p><strong className='roboto-bold-italic'>Price:</strong> ${property.price}</p>
              <p><strong className='roboto-bold-italic'>Address:</strong> {property.address}</p>
              {/* Display other property details */}
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;